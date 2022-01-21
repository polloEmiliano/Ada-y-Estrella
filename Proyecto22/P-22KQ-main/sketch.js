var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hadaImg, hadaVoz;
var hada, hadaBody;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	hadaImg = loadImage("images/fairy.png","images/fairyimage1.png","images/fairyimage2.png");
	hadaVoz = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	//ajuste de la posicion y dimension del hada
	hadaVoz.loop();
	//escribe el código para reproducir el sonido fairyVoice
	hadaVoz = loadSound("sound/JoyMusic.mp3");

	//crea el sprite del hada, y agrega la animación para el hada
	hada = createSprite(200,500,30,30);
	hada.addImage(hadaImg);
	hada.scale = 0.1


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	keyPressed();

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 450 && starBody.position.y > 450){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	/*  este codigo ha sido comentado
	if (keyCode === LEFT_ARROW) {
		hada.velocitX = -1
	}

	if (keyCode === LEFT_ARROW) {
		hada.velocitX = 1
	}
	*/
	if(keyCode === LEFT_ARROW && hada.x>10){
        hada.x =hada.x-9;}
		
	 

	if(keyCode === RIGHT_ARROW && hada.x<600){
		
		hada.x=hada.x+9;
	}
}
