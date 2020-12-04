var leftText;
var rightText;
var bodyCopy;
var headCopy;
var leftPos;
let inPosition = false;
var leftTextCount = 0;
var rightPos;
var speed = 5;
let leftC;
let rightC;
let mainTextFade = 254.5;
let mainTextCount = -0.5;

var rightTextCount = 0;

function preload() {
  leftText = loadStrings('words02.txt');
  rightText = loadStrings('words01.txt');
  bodyCopy = loadFont('abril.otf');
  headCopy = loadFont('Fabrik-Bold.otf');
}


function setup() {
  createCanvas(800,800);
  textFont(headCopy);
  leftPos = -100;
  rightPos = 100;
  textSize(30);
  frameRate(30);
  leftC = color(0,0,0);
  rightC = color(0,0,0);
}

function draw() {
  clear();
  translate(width/2,height/2);
  //textSize(30);
  

  //LEFT TEXT
    fill(leftC);
  textAlign(RIGHT, TOP);

  if(leftPos < -0.1) {
     leftPos -= (leftPos/speed);
    }
  else if(leftPos>=100){
            leftPos = -100;
    leftC = color(random(255), random(255), random(255));
          leftTextCount++;
              if(leftTextCount == leftText.length)
                  {
                    leftTextCount = 0;
                  }
          }
  else{
     if(leftPos < 0.1 && leftPos > -0.1){
       if((leftText[leftTextCount] === 'art' && rightText[rightTextCount] === 'design') || (leftText[leftTextCount] === 'here' && rightText[rightTextCount] === 'now') )
         {
            pauseTheWords(millis()+3000);
         }
       }
    leftPos = abs(leftPos);
    leftPos += (leftPos/speed);

  }
  
  text(leftText[leftTextCount],-204,leftPos, 200,60); 



  
  //RIGHT TEXT
    fill(rightC);
  textAlign(LEFT, TOP);


  if(rightPos > 0.1) {
     rightPos -= (rightPos/speed);
    }
  else if(rightPos<=-100){
            rightPos = 100;
            rightC = color(random(255), random(255), random(255));
          rightTextCount++;
              if(rightTextCount == rightText.length)
                  {
                    rightTextCount = 0;
                  }
          }
  else{
   
    rightPos = -abs(rightPos);
    rightPos += (rightPos/speed);
    
  }
  
  text(rightText[rightTextCount],44,rightPos, 200,60); 
  

 

  //rectangles
  
  
  noStroke();
  fill(255);
  rect(-width/2,-height/2,width,height/2-20);
  rect(-width/2,80,width,height/2);
  
   fill(0);
  text('&',0,2);
  textSize(50);
  textAlign(CENTER);
  fill(0, mainTextFade);
 text('Cardiff School of',-width/2+15,-90,width,height);
  
  if(mainTextFade <= -50)
    {
      mainTextCount *= -1;
      mainTextFade = -49.5;
    }
  else if(mainTextFade >= 255){
      mainTextFade = 254.5;
      mainTextCount *= -1;
  }

  
  mainTextFade += mainTextCount;

}


function pauseTheWords(countTo)
{
  noLoop();
  while(countTo > millis())
    {
      
    }
  
  loop();
  
}

