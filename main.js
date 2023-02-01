
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
        //flip on x
        this.pig.scale.setTo(-1,1);

        this.sheep = this.game.add.sprite(100,250,'sheep');
        this.sheep.scale.setTo(0.5);
        this.sheep.anchor.setTo(0.5);
        this.sheep.angle = 90;
        this.scale.PageAlignHorizontally = true;
        this.scale.PageAlignVertically = true;
        this.scale.setScreenSize(true);
        this background = this.game.add.sprite(0,0,'background')
        this.pig = this.game.add.sprite(this.game.world.centerX)
        //left arrow
        //right arrow
        this.rightArrow = this.game.add.sprite(580,this.game.world.centerY,'arrow')
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.customPrams = {direction: 1};
    },
    update: function(){
        this.sheep.angle += 0.5;  
        switchAnimal: function(sprite, event){
            console.log('move animal');
        }      
    }
}

//initiate the Phaser framework
var game = new Phaser.Game(640,360, Phaser.AUTO);
 game.state.add('GameState',GameState);
 game.state.start('GameState');
