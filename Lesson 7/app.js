console.log("Yash is amazing");

var game = new Phaser.Game(800,600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var score = 0;
var life = 3;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//Create the sky
	game.add.sprite(0, 0, 'sky');
	//Create group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	//Create the Ground
	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	//create the ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;
	//creating the player sprite
	player = game.add.sprite(32, 400, 'dude');
		//animate the player sprite
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('left', [5, 6, 7, 8], 10, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
	//create the enemies
	enemy1 = game.add.sprite(760, 20, 'baddie');
		//animate the enemy1
		enemy1.animations.add('left', [0,1], 10, true);
		enemy1.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(10, 20, 'baddie');
		//animate the enemy2
		enemy2.animations.add('left', [0,1], 10, true);
		enemy2.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy2);
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;

	enemy3 = game.add.sprite(200, 20, 'baddie');
		//animate the enemy3
		enemy3.animations.add('left', [0,1], 10, true);
		enemy3.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy3);
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 500;
		enemy3.body.collideWorldBounds = true;

	//create keyboard entries
	cursors = game.input.keyboard.createCursorKeys();

	//create the stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;
	//we will create 12 stars evenly spaced
	for(var i = 0; i < 12; i++){
		var star = stars.create(i * 70, 0, 'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

	//set the text style
	var style = {font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle"};
	//positioning the score
	scorelabel = game.add.text(-60,0, "Your score is: ", style);
	scoretext = game.add.text(70, 0, score,style);
	scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

	//set the text bounds x0, y520, x800, y100
	scorelabel.setTextBounds(0,520,800,100);
	scoretext.setTextBounds(0,520,800,100);

	//doing the same for lives
	lifelabel = game.add.text(-300,0,"Lives: ", style);
	lifetext = game.add.text(-240,0,life,style);
	lifelabel.setShadow(3,3,'rgba(0,0,0,0.5',2);
	lifetext.setShadow(3,3,'rgba(0,0,0,0.5',2);
	lifelabel.setTextBounds(0,0,800,100);
	lifetext.setTextBounds(0,0,800,100);
}

function update(){
	//collide player and enemies with platform
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(enemy2, platforms);
	game.physics.arcade.collide(enemy3, platforms);

	//reset the player's velocity if no events.
	player.body.velocity.x = 0;

	//player movement by keys
	if(cursor.left.isDown){
		//move left
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if(cursor.right.isDown){
		//move right
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		player.animations.stop();
		player.frame = 4;
	}

	//allow the player to jump if the player is touching the ground
	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}

	//enemy AI
	if(enemy1.x >759){
		enemy1.animations.play('left');
		enemy1.body.velocity = -120;
	} else if(enemy1.x < 405){
		enemy1.animations.play('right');
		enemy1.body.velocity = 120;
	}
	if(enemy2.x >200){
		enemy2.animations.play('left');
		enemy2.body.velocity = -80;
	} else if(enemy2.x < 21){
		enemy2.animations.play('right');
		enemy2.body.velocity = 80;
	}
	if(enemy3.x >759){
		enemy3.animations.play('left');
		enemy3.body.velocity = -120;
	} else if(enemy3.x < 21){
		enemy3.animations.play('right');
		enemy3.body.velocity = 120;
	}

	//collide stars with platform
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.overlap(player, star, collectStar, null, this);
	game.physics.arcade.overlap(player, enemy1, loseLife, null, this);
	game.physics.arcade.overlap(player, enemy2, loseLifeLeft, null, this);
	game.physics.arcade.overlap(player, enemy3, loseLife, null, this);
}

//define  collectStar function
function collectStar(player,star){
	//remove the star
	star.kill();
	//update score variable
	score = score+1;
	//reflect in text
	scoretext.setText(score);

	//create new star
	star = stars.create(Math.floor(Math.random()*750),0,'star');
	star.body.gravity.y = 200;
	star.body.bounce.y = 0.7 + Math.random() * 0.2;
}

//define loseLife
function loseLife(player, enemy){
	//lose life
	life = life-1;
	lifetext.setText(life);

	//remove and respawn enemy
	enemy.kill();
	enemy.reset(760, 20);
}

//define loseLifeLeft
function loseLife(player, enemy){
	//lose life
	life = life-1;
	lifetext.setText(life);

	//remove and respawn enemy
	enemy.kill();
	enemy.reset(10, 20);
}













