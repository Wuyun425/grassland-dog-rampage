// 創建一個 Phaser 遊戲對象
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;
var dog;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'https://via.placeholder.com/50'); // 玩家方塊
    this.load.image('dog', 'https://via.placeholder.com/50'); // 狗怪方塊
}

function create() {
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    dog = this.physics.add.sprite(600, 450, 'dog');
    dog.setBounce(0.2);
    dog.setCollideWorldBounds(true);

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
