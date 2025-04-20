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
    this.load.image('ground', 'https://via.placeholder.com/800x50'); // 地板
}

function create() {
    // 建立靜態平台群組
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 580, 'ground'); // 地板位置 Y=580

    // 玩家
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms); // 加入碰撞

    // 狗怪
    dog = this.physics.add.sprite(600, 450, 'dog');
    dog.setBounce(0.2);
    dog.setCollideWorldBounds(true);
    this.physics.add.collider(dog, platforms); // 狗也跟平台碰撞

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
