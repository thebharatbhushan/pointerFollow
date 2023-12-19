
// ©Bharat Bhushan | Do not use without permission..
class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('background', 'image/background.png');
        this.load.image('sprite', 'img/sprite.png');
    }

    create ()
    {
        var aim = this.physics.add.sprite(300,50,'sprite').setScale(0.05);
	    this.input.on('pointermove', function(pointer) {
	    this.tweens.add({
	    	targets: aim,
	    	x: pointer.x,
	    	y: pointer.y,
	    	duration: 1000,
	    	ease: 'Sine.easeOut',
	    }, this);
	}, this);
    }
}

const config = {
	type: Phaser.WEBGL,
	width: 1100,
	height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
	pixelArt: true,
    parent: 'phaser-example',
	scene: Example
}

const game = new Phaser.Game(config);


