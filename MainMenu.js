MyGame.MainMenu = function(game) {};
var self;
var coverGroup;
var bar;
var score=0;
var barbar;
var bb;
var bar_heart;
MyGame.MainMenu.prototype = {
    create: function() {
    	self = this;
        this.add.image(0,0,'MainMenu_bg')
        this.ruleBtn = this.add.image(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 150,'button-rule');
        this.ruleBtn.anchor.set(0.5,1)
       
        this.ruleBtn.inputEnabled = true;
        this.ruleBtn.events.onInputDown.add(this.showRule, this);
        
        this.startBtn = this.add.button(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT - 50,'button-start', this.startGame, this);
        this.startBtn.anchor.set(0.5,1)
        
        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);

    },
    startGame: function() {
        this.state.start('Game');
    },
    showRule : function(){
    	showCover('rule',true,false)
    }
};

function showCover(win,close,isBar)
{
	coverGroup = self.add.group();
	coverGroup.create(0,0,'cover');
	coverGroup.create(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2,win).anchor.set(0.5);
    if(isBar)
    {
        bar = self.add.image(580,700,'bar');
        bb = self.add.image(596,969,'bb');
        bb.anchor.set(0.5,1);
        barbar = self.add.image(596,964,'barbar');
        barbar.anchor.set(0.5,1);
        bar_heart = self.add.image(596,964,'bar_heart');
        bar_heart.anchor.set(0.5,1);
        barbar.height = 0;
        self.add.tween(barbar).to({height:233*(score/100)}, 1000, Phaser.Easing.Cubic.None, true,0);
        self.add.tween(bar_heart).to({y:964 - 233*(score/100)}, 1000, Phaser.Easing.Cubic.None, true,0).onComplete.add(function(){
            if(score>=100)
            {
                self.add.tween(bar_heart.scale).to({x:1.2,y:1.2}, 500, Phaser.Easing.Cubic.None, true,0,-1,true)
            }
        },this)

    }

	if(close)
	{
		coverGroup.setAll('inputEnabled', true);
		coverGroup.callAll('events.onInputDown.add', 'events.onInputDown', function(){
			coverGroup.forEach(function(item){
				item.kill();
			})
            if(isBar)
            {
                bar.kill();
                barbar.kill();
                bb.kill();
                bar_heart.kill();
            }
		}, self);

	}

}
