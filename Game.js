MyGame.Game = function(game) {

};
MyGame.Game.prototype = {
    create: function() {
    	this.add.image(0,0,'game_bg');
    	
    	this.peps = this.add.image(MyGame.GAME_WIDTH/2, 120,'pp');
    	this.peps.anchor.set(0.5,0);
    	this.add.tween(this.peps).to({y:100}, 1500, Phaser.Easing.Cubic.None, true,0,-1,true);
    	
    	this.replayGo = this.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 110,'replayGo', this.goLeve, this);
    	this.replayGo.anchor.set(0.5,0);
    	this.add.tween(this.replayGo.scale).to({x:0.9,y:0.9}, 500, Phaser.Easing.Cubic.None, true,0,-1,true);
    	
    	var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);
    },
    goLeve: function() {
		this.state.start('leve1');
    }
};

