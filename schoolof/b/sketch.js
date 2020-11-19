//LEFT TEXT VARIABLES
var leftText;
var leftArray = [];
var counterL = 1;
var newLPos;
var scalingL;


//RIGHT TEXT VARIABLES
var rightText;
var rightArray = [];
var counterR = 1;
var newRPos;
var scalingR;

//SHARED VARIABLES
var wordHeight;
var txtSize = 28;
var sine = 0.00;
var schoolOfFade = 100;



function preload() {
  leftText = loadStrings('words02.txt');
  rightText = loadStrings('words01.txt');
  bodyCopy = loadFont('abril.otf');
  headCopy = loadFont('Fabrik-Bold.otf');
}


function setup() {
  createCanvas(800,800);
  wordHeight = height/leftText.length;
  

  //LEFT TEXT
  for(var i=0; i<leftText.length;i++)
    {
      leftArray.push({words:leftText[i], yPos:wordHeight*i});
    }
  
  //RIGHT TEXT
  for(var i=0; i<rightText.length;i++)
    {
      rightArray.push({words:rightText[i], yPos:wordHeight*i});
    }
  
  
  
  
}

function draw() {
  clear();
  noStroke();
  textFont(headCopy);
  
  //GREY BOX BEHIND TEXT
  fill(100);
  rect(0,height/2-16,width,100);
  
  
  
  
  //LEFT TEXT
         textAlign(RIGHT, TOP);
          var s = map(sin(sine),-1,1,0,3);
        
          for(var i=0; i<leftArray.length; i++)
            {
              leftArray[i].yPos += s;
              scalingL = abs(map(leftArray[i].yPos, 0, height, -1,1));
              textSize(txtSize-(txtSize*scalingL));
              fill(255,0-(255*scalingL));
              
              if(scalingL < 0.1){ 
                fill(255);
              }
              
              
              if(leftArray[i].yPos >= height)
                {
                  leftArray[i].yPos -= height;
                  leftArray.splice(0, 0, leftArray[i]);
                   leftArray.pop();
                }
              
              text(leftArray[i].words,-40,leftArray[i].yPos,width/2,height);
            }

  
  //RIGHT TEXT
          textAlign(LEFT, TOP);
        
          for(var i=0; i<rightArray.length; i++)
            {
              rightArray[i].yPos -= s;
              scalingR = abs(map(rightArray[i].yPos, 0, height, -1,1));
              textSize(txtSize-(txtSize*scalingR));
              fill(255,0-(255*scalingR));
              
              if(scalingR < 0.1){ 
                fill(255);
              }
              
               if(rightArray[i].yPos < 0)
                {
                  rightArray[i].yPos = (rightArray.length*wordHeight)-rightArray[i].yPos;
                  rightArray.push(rightArray[i]);
                   rightArray.splice(0,1);
                }
              
              text(rightArray[i].words,width/2+40,rightArray[i].yPos-7,width/2,height);
            }
  

  sine+=TWO_PI/44.462;
  //sine+=0.05;
  
  //BOXES
  rectMode(CORNER);
  fill(255);
  noStroke();
  rect(0,0,width,height/2-16);
  rect(0,height/2+56,width,height/2);
  rect(0,height/2-16,100,100);
  rect(width-100,height/2-16,100,100);
  
  //SCHOOL OF
  textAlign(CENTER,TOP);
  fill(0,schoolOfFade);
  textSize(120);
  text('school'+'\n'+'of',0,50,width,height);
  if(schoolOfFade > 0)
    {  
      schoolOfFade-=0.2;
    }

 //AMPERSAND
  fill(255,150);
  textSize(60);
  textFont(bodyCopy);
  textAlign(CENTER,CENTER);
  text('&',0,0,width,height);
  
  

  
  
  
  
  
}

