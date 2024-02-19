var trex, trex_running, edges;
var ground
var star
function preload(){  //carrega imagem
  trex_running = loadAnimation("mario.png");
  ground = loadImage("ground2.png");
  star = loadImage("star.png");
}

function setup(){
  createCanvas(1000,600);
  
  //criando o trex
  star = createSprite(300, 100, 50, 50);
  trex = createSprite(50,30,20,50); //x, y, l, a
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  ground = createSprite(200, 200, 8000, 20);
  //adicione dimensão e posição ao trex
  trex.scale = 0.2;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  // trex.velocityX = trex.velocityX + 0.041;
 //impedir que o trex caia
  trex.collide(edges[3])
  trex.collide(ground);
  drawSprites();
}