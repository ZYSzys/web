







var score = 0;
var board = new Array();
var hasconflict = new Array();
var my_list = {
	2: '小白',
	4: '实习生',
	8: '程序猿',
	16: '项目经理',
	32: '架构师',
	64: '技术经理',
	128: '高级经理', 
	256: '技术总监',
	512: '副总裁',
	1024: 'CTO',
	2048: '总裁',
	4096: '人生巅峰',
	8192: '见乔布斯',
}


$(document).ready(function() {
	newGame();
});

$(document).keydown(function(event) {


	event.preventDefault();
	switch (event.keyCode) {
		case 37:
		if(moveLeft()) {
			setTimeout("generateOneNumber()", 210);
			setTimeout("isGameOver()", 300);
		}
		break;
		case 38:
		if(moveUp()) {
			setTimeout("generateOneNumber()", 210);
			setTimeout("isGameOver()", 300);
		}
		break;
		case 39: //right
		if (moveRight()) {
			setTimeout("generateOneNumber()", 210);
			setTimeout("isGameOver()", 300);
		}
		break;
        case 40: //down
        if (moveDown()) {
        	setTimeout("generateOneNumber()", 210);
        	setTimeout("isGameOver()", 300);
        }
        break;
        default: //default
        break;
    }
});

function newGame() {
	init();

	generateOneNumber();
	generateOneNumber();
}

function init() {
	// body...
	score = 0;

	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			var gridCell = $('#grid-cell-'+i+"-"+j);
			gridCell.css('top', getPosTop(i, j));
			gridCell.css('left', getPosLeft(i, j));
		}
	}

	for(var i = 0; i < 4; i++) {
		board[i] = new Array();
		hasconflict[i] = new Array();
		for(var j = 0; j < 4; j++) {
			board[i][j] = 0;
			hasconflict[i][j] = 0;
		}
	}

	updateBorderView();
}

function updateBorderView() {
	$(".number-cell").remove();

	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var theNumberCell = $('#number-cell-' + i + "-" + j);

			if(board[i][j] == 0) {
				theNumberCell.css('width', '0px');
				theNumberCell.css('height', '0px');
				theNumberCell.css('top', getPosTop(i, j) + 50);
				theNumberCell.css('left', getPosLeft(i, j) + 50);
			}else {
				theNumberCell.css('width', '100px');
				theNumberCell.css('height', '100px');
				theNumberCell.css('top', getPosTop(i, j));
				theNumberCell.css('left', getPosLeft(i, j));
				theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
				theNumberCell.css('color', getNumberColor(board[i][j]));
				theNumberCell.text(my_list[borad[i][j]]);
			}

			hasconflict[i][j] = false;
		}
	}
}


function generateOneNumber() {
	// body...
	if(noSpace(board)) {
		return false;
	}

	var randx = parseInt(Math.floor(Math.random()*4));
	var randy = parseInt(Math.floor(Math.random()*4));

	var times = 0;
	while(times < 50) {
		if(board[randx][randy] == 0)
			break;
		randx = parseInt(Math.floor(Math.random() * 4));
		randy = parseInt(Math.floor(Math.random() * 4));

		times++;
	}

	if(times == 50) {
		var find = false;
		for(var i = 0; i < 4; i++) {
			if(find == true) 
				break;
			for(var j = 0; j < 4; j++) {
				if(board[i][j] == 0) {
					randx = i;
					randy = j;
					find = true;
					break;
				}
			}
		}
	}

	var randNumber = Math.random() < 0.5 ? 2 : 4;

	board[randx][randy] = randNumber;
	showNumberWithAnimation(randx, randy, randNumber);
	setTimeout("updateBorderView()", 50);
	return true;
}

function isGameOver() {
	if(noSpace(board) && !canMoveLeft(board) && !canMoveUp(board) && !canMoveRight(borad) && !canMoveDown(borad)) {
		alert("Done~~");
		return true;
	}
    return false;
}

function moveLeft() {
    if (!canMoveLeft(board))
        return false;

    //move left
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    //为空且无障碍
                    if (board[i][k] == 0 && !blockHorizontal(board, i, j, k)) {
                        //move
                        showMoveAnimation(i, j, i, k);

                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if ((board[i][k] == board[i][j]) && !blockHorizontal(board, i, j, k) && !hasconflict[i][k]) {
                        //move
                        showMoveAnimation(i, j, i, k);

                        //add number
                        board[i][k] <<= 1;
                        board[i][j] = 0;

                        //add score
                        score += board[i][k];
                        updateSocre(score);

                        hasconflict[i][k] = true;
                    }
                }
            }
        }
    }

    setTimeout('updateBoardView()', 200);
    return true;
}

function moveUp() {
    if (!canMoveUp(board))
        return false;

    //move up
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    //为空且无障碍
                    if (board[k][j] == 0 && !blockVertical(board, j, i, k)) {
                        //move
                        showMoveAnimation(i, j, k, j);

                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    } else if ((board[k][j] == board[i][j]) && !blockVertical(board, j, i, k) && !hasconflict[k][j]) {
                        //move
                        showMoveAnimation(i, j, k, j);

                        //add number
                        board[k][j] <<= 1;
                        board[i][j] = 0;

                        //add score
                        score += board[k][j];
                        updateSocre(score);

                        hasconflict[k][j] = true;
                    }
                }
            }
        }
    }

    setTimeout("updateBoardView()", 200);
    return true;
}

function moveRight() {
    if (!canMoveRight(board))
        return false;

    //move right
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    //为空且无障碍
                    if (board[i][k] == 0 && !blockHorizontal(board, i, j, k)) {
                        //move
                        showMoveAnimation(i, j, i, k);

                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if ((board[i][k] == board[i][j]) && !blockHorizontal(board, i, j, k) && !hasconflict[i][k]) {
                        //move
                        showMoveAnimation(i, j, i, k);

                        //add number
                        board[i][k] <<= 1;
                        board[i][j] = 0;

                        //add score
                        score += board[i][k];
                        updateSocre(score);

                        hasconflict[i][k] = true;
                    }
                }
            }
        }
    }

    setTimeout('updateBoardView()', 200);
    return true;
}

function moveDown() {
    if (!canMoveDown(board))
        return false;

    //move down
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    //为空且无障碍
                    if (board[k][j] == 0 && !blockVertical(board, j, i, k)) {
                        //move
                        showMoveAnimation(i, j, k, j);

                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    } else if ((board[k][j] == board[i][j]) && !blockVertical(board, j, i, k) && !hasconflict[k][j]) {
                        //move
                        showMoveAnimation(i, j, k, j);

                        //add number
                        board[k][j] <<= 1;
                        board[i][j] = 0;

                        //add score
                        score += board[k][j];
                        updateSocre(score);

                        hasconflict[k][j] = true;
                    }
                }
            }
        }
    }

    setTimeout('updateBoardView()', 200);
    return true;
}


















