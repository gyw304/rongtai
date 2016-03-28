MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    preload: function() {
    	
    	this.stage.backgroundColor = '#ffffff'

    },
    start : function(){
        this.load.image('blink','assets/blink.png');
        this.load.image('cover','assets/cover.png');
        this.load.image('MainMenu_bg','assets/MainMenu_bg.jpg?1');
        this.load.image('button-rule','assets/button-rule.png');
        this.load.image('button-start','assets/button-start.png');
        this.load.image('rule','assets/rule.png');
        
        this.load.image('game_bg','assets/game_bg.jpg');
        this.load.image('pp','assets/pp.png');
        this.load.image('replayGo','assets/replayGo.png');

        this.load.image('bar','assets/bar.png');
        this.load.image('barbar','assets/barbar.png');
        this.load.image('bb','assets/bb.png');
        this.load.image('bar_heart','assets/bar_heart.png');
        this.load.image('cur','assets/cur.png');
        this.load.image('yizi','assets/yizi.png');
        this.load.image('lv1_bg','assets/lv1_bg.jpg');
        this.load.image('lv1_0','assets/lv1_0.png');
        this.load.image('lv1_20','assets/lv1_20.png');
        this.load.image('lv1_60','assets/lv1_60.png');
        this.load.image('lv1_100','assets/lv1_100.png');
        this.load.image('go-lv2-btn','assets/go-lv2-btn.png');
        
        this.load.image('lv2_bg','assets/lv2_bg.jpg');
        this.load.image('lv2_0','assets/lv2_0.png');
        this.load.image('lv2_20','assets/lv2_20.png');
        this.load.image('lv2_60','assets/lv2_60.png');
        this.load.image('lv2_100','assets/lv2_100.png');
        this.load.image('go-lv3-btn','assets/go-lv3-btn.png');
        
        this.load.image('lv3_bg','assets/lv3_bg.jpg');
        this.load.image('lv3_0','assets/lv3_0.png');
        this.load.image('lv3_20','assets/lv3_20.png');
        this.load.image('lv3_60','assets/lv3_60.png');
        this.load.image('lv3_100','assets/lv3_100.png');
        this.load.image('go-lv4-btn','assets/go-lv4-btn.png');
        
        this.load.image('lv4_bg','assets/lv4_bg.jpg');
        this.load.image('lv4_0','assets/lv4_0.png');
        this.load.image('lv4_20','assets/lv4_20.png');
        this.load.image('lv4_60','assets/lv4_60.png');
        this.load.image('lv4_100','assets/lv4_100.png');
        this.load.image('succes','assets/succes.png');
        this.load.start();
    },

    fileComplete : function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete : function(){
        this.state.start('MainMenu');
    },
    create: function() {
        this.start();
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2, '', { fill: '#000000' });
        this.text.anchor.set(0.5);
    }
};



