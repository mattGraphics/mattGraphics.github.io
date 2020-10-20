let perps = ['john','jack','jim'];
let places = ['place a','place b','place c'];
let crimes = ['mugging','stabbing','jaywalking'];

let perp = "";
let place = "";
let crime = "";

let button;

let cnv;


function setup() {
  cnv = createCanvas(400, 400);
  cnv.position(windowWidth/2-(width/2), windowHeight/2-(height/2), 'fixed');
  background(50);
  
  button = createButton('generate');
  button.position(cnv.x+50, cnv.y+50);
  button.mousePressed(generate);
  button.addClass('bigB');
  
  textSize(30);
  fill(255);
  //textAlign(CENTER, CENTER);
  
}

function draw() {
  //background(220);
  

}

function generate()
{
  background(0);
  perp = random(perps);  
  place = random(places); 
  crime = random(crimes); 
  
  text(perp+" in "+place+" committed "+crime, 50, 120, 300,300);
  

}

function windowResized() {
  cnv.position(windowWidth/2-(width/2), windowHeight/2-(height/2), 'fixed');
  button.position(cnv.x+50, cnv.y+50);
}
