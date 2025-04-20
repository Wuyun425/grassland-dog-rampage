var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;
var dog;
var platforms;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'https://via.placeholder.com/50');
    this.load.image('dog', 'https://via.placeholder.com/50');
    this.load.image('ground', 'https://via.placeholder.com/800x50'); 
}

function create() {
    
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 580, 'ground'); 

    
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms); 

    
    dog = this.physics.add.sprite(600, 450, 'dog');
    dog.setBounce(0.2);
    dog.setCollideWorldBounds(true);
    this.physics.add.collider(dog, platforms); 

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
    }
    else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}
