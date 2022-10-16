
class GameState{

    constructor(){
        this.background = null;
    }

    preload(){
        this.load.image('background', 'assets/images/background.png');
    }

    create(){
        this.background = this.game.add.sprite(0,0, 'background');
    }
    update(){
        
    }
}

//initiate the Phaser framework
var game = new Phaser.Game(640,360, Phaser.AUTO);
 game.state.add('GameState',GameState);
 game.state.start('GameState');