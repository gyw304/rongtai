MyGame.leve2 = function(game) {

};
MyGame.leve2.prototype = {
    create: function() {
    	
    	this.add.image(0,0,'lv2_bg');
    	
    	this.cur = this.add.image(MyGame.GAME_WIDTH/2,200,'cur');
        this.cur.anchor.set(0.5);
        this.add.tween(this.cur).to({y:210}, 500, Phaser.Easing.Cubic.None, true,0,-1,true);
    	
    	this.drag = this.add.image(MyGame.GAME_WIDTH/2,100,'yizi');
    	this.drag.anchor.set(0.5);
        this.drag.inputEnabled = true;
        this.drag.input.enableDrag();
        this.drag.events.onDragStart.add(function(){
        	this.cur.kill()
        }, this);
        this.drag.events.onDragStop.add(this.onDragStop, this);
        
        
    	
    	var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);
    },
    onDragStop : function(){
    	if(this.drag.x>=0 && this.drag.x<=320 && this.drag.y >= 633 && this.drag.y <=833)
    	{
			score = 0;
    		showCover('lv2_0',true,true)
    	}
    	else if(this.drag.x>320 && this.drag.x<=640 && this.drag.y >= 633 && this.drag.y <=833)
    	{
			score = 20;
    		showCover('lv2_20',true,true)
    	}
    	else if(this.drag.x>=0 && this.drag.x<=320 && this.drag.y > 833 && this.drag.y <= 1008)
    	{
			score = 60
    		showCover('lv2_60',true,true)
    	}
    	else if(this.drag.x>320 && this.drag.x<=640 && this.drag.y > 833 && this.drag.y <= 1008)
    	{
    		this.drag.inputEnabled = false;
			score = 100;
    		showCover('lv2_100',false,true)
    		this.add.button(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 150,'go-lv3-btn',function(){
				score = 0;
    			this.state.start('leve3');
    		},this).anchor.set(0.5,0);
    		
    	}
    	else
    	{
			score = 0;
    		showCover('lv2_0',true,true)
    	}
    }
};

