
var GameState={

    // constructor(){
    //     this.background = null;
    // }

    preload: function(){
        this.load.image('background', 'assets/images/background.png');
        this.load.image('chicken', 'assets/images/chicken.png')
        this.load.image('horse','aasets/images/horse.png')
        this.load.image('pig','assets/images/horse.png')
        this.load.image('sheep','assets/images/sheep3.png')
    },

    create: function(){
        
        this.background = this.game.add.sprite(0,0, 'background');

        this.chicken = this.game.add.sprite (this.game.world.centerX,this.game.world.centerY, 'chicken');

        this.chicken.anchor.setTo(0.5,0.5);

        this.chicken.scale.setTo(2,1);

        this.horse = this.game.add.sprite(120,10, 'horse');
        this.horse.scale.setTo(0.5);

        this.pig= this.game.add.sprite(500, 'horse');
        this.pig.anchor.setTo(0.5);
        this.pig.scale.setTo(-1,1);
    },
    update: function(){
        
    }
}

//initiate the Phaser framework
var game = new Phaser.Game(640,360, Phaser.AUTO);
 game.state.add('GameState',GameState);
 game.state.start('GameState');