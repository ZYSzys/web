(function(){	
	/*
	//
	// This function relies on animate.css! 
	//
	// Numberwang.countUpOrDown -- How to use:
	// 
	numberWang.countUpOrDown('yourDivId', startingNumber(can be negative or positive), endingNumber(can be negative or positive), secondsBetweenNumbers, effectBetweenNumbers, transitionDurationBetweenNumber, finalEndingEffect, finalEndingEffect);
	//	
	// You can find the animate effects on the github page:
	// https://github.com/daneden/animate.css
	//
	*/
	$.getJSON("https://cpv2api.com/profile/cameronfitzwilliam", function(resp){
		if(resp.success){
		var userFollowers = parseInt(resp.data.followers);
			numberWang.countUpOrDown('numberWang', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s");
		}
	});

})();