var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-area', { preload: preload, create: create, update: update});

function preload() {

  //  You can fill the preloader with as many assets as your game requires

  //  Here we are loading an image. The first parameter is the unique
  //  string by which we'll identify the image later in our code.

  //  The second parameter is the URL of the image (relative)
  game.load.image('image1', 'res/images/image1.png');

}

function create() {

  //  This creates a simple sprite that is using our loaded image and
  //  displays it on-screen

  image = game.add.sprite(game.world.centerX, game.world.centerY, 'image1');
  image.scale.setTo(0.5,0.5);
  image.anchor.setTo(0.5, 0.5);
  
}

function update(){
  //this is where things are updated
  game.width = $(window).width()/4*3;
  game.height = game.width/1.77;
}


