var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true // 設 true 方便觀察碰撞區域
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
    // ✅ 換成可載入的圖片（這些都是有效圖片）
    this.load.image('player', 'https://i.imgur.com/T5s8S1Q.png');
    this.load.image('dog', 'https://i.imgur.com/uYvD35c.png');
    this.load.image('ground', 'https://i.imgur.com/AHcf1f5.png');
}

function create() {
    // 地板
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 580, 'ground').setScale(2).refreshBody();

    // 玩家
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);

    // 狗怪
    dog = this.physics.add.sprite(600, 450, 'dog');
    dog.setBounce(0.2);
    dog.setCollideWorldBounds(true);
    this.physics.add.collider(dog, platforms);

    // 控制
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}
