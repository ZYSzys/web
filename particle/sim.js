var renderer = {
	particle_count: 1000,
	particle_radius: 1,
	max_rotation_angle: Math.PI / 60,
	translation_count: 500,

	init: function(strategy) {
		this.setParameters(strategy);
		this.createParticles();
		this.setupFigure();
		this.reconstructMethod();
		this.bindEvent();
		this.drawFigure();
	},
	setParameters: function(strategy) {
		this.$window = $(window);

		this.$container = $('#jsi-particle-container');
		this.width = this.$container.width();
		this.height = this.$container.height();

		this.$canvas = $('<canvas />').attr({width:this.width, height:this.height}).appendTo(this.$container);
		this.context = this.$canvas.get(0).getContext('2d');

		this.center = {x:this.width/2, y:this.height/2};

		this.rotationX = this.max_rotation_angle;
		this.rotationY = this.max_rotation_angle;
		this.strategyIndex = 0;
		this.translationCount = 0;
		this.theta = 0;

		this.strategies = strategy.getStrategies();
		this.particles = [];
	},
	createParticles: function() {

	},
	setupFigure: function() {

	},
	reconstructMethod: function() {

	},
	bindEvent: function() {

	},
	drawFigure: function() {

	}
};

var strategy = {
	scatter_radius: 150,
	cone_aspect_ratio: 1.5,
	ring_count: 5,

	getStrategies: function() {
		var strategies = [];
		for(var i in this) {
			
		}
	},
};

$(function() {
	renderer.init(strategy);
});