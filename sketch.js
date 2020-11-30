//Create variables here

var dogImg , happyDogImg , database , dog , milkimg;

var foodStock , food;

function preload()
{
  //load images here
  
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  milkimg = loadImage("images/Milk.png");

}

function setup() {
  createCanvas(800, 400);

  database = firebase.database();
  
  dog = createSprite(600 , 250 , 50 , 50);
  dog.addImage("dogImage" , dogImg);
  dog.scale = 0.2;

  food = new Food();
  food.getFoodStock();
  food.updateFoodStock();
  food.deductFoodStock(); 
  
}

function draw() {  
  background(46 , 139 , 87);

  drawSprites();

  fill("white");
  text("Food :" + foodStock , 300 , 20);

}