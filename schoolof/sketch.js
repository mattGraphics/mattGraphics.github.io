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
var sine = 0.01;

//BG ''&'' CODE
let graphic
let font
let canvas
const loopDuration = 3 * 60



function preload() {
  leftText = loadStrings('words02.txt');
  rightText = loadStrings('words01.txt');
  bodyCopy = loadFont('abril.otf');
}


function setup() {
  createCanvas(800,800);
  wordHeight = height/leftText.length;
  textFont(bodyCopy);

  //LEFT TEXT
  for(var i=0; i<leftText.length;i++)
    {
      leftArray.push({words:leftText[i], yPos:wordHeight*i});
      if(leftArray[i].words === 'Architectural Design & Technology')
        {
          leftArray[i].words = 'Architectural Design'+'\n'+'& Technology';
        }
    }
  
  //RIGHT TEXT
  for(var i=0; i<rightText.length;i++)
    {
      rightArray.push({words:rightText[i], yPos:wordHeight*i});
    }
  
  
  //BG '&' CODE
  // create offscreen graphics buffer
  graphic = createGraphics(width, height)
  
  // type setup offscreen in buffer
  graphic.textFont(bodyCopy)
  graphic.textAlign(CENTER, CENTER)
  graphic.blendMode(SCREEN)
  graphic.textSize(200)
   graphic.fill('rgba(255,37,37, 0.5)')
  graphic.text('&', width / 2, height / 2)
  graphic.textSize(210)
  graphic.fill('rgba(43,255,136, 0.5)')
  graphic.text('&', width / 2, height / 1.98)
  graphic.textSize(190)
  graphic.fill('rgba(33,212,253, 0.5)')
  graphic.text('&', width / 2, height / 2.02)
  
  
}

function draw() {
  clear();
  noStroke();
  
 
  
   //BG '&' CODE
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, 2 * PI)

  
  const tiles = 24
  //const tileSize = width / tiles
  tileSize = 50
  
  // loop over each tile
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      
      const distortionX = cos(u + x * 0.5) * 10
      const distortionY = sin(u + y * 0.5) * 10
      
      // think of this as applying the grid to the source in the graphics buffer
      const sx = x * tileSize + distortionX
      const sy = y * tileSize + distortionY
      const sw = tileSize + distortionX
      const sh = tileSize + distortionY

      // and this as applying the grid to the destination on the canvas
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      // grided image from buffer into main canvas
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
  

  
  
  
  //LEFT TEXT
         textAlign(RIGHT, TOP);
          var s = map(sin(sine),-1,1,0,3);
        
          for(var i=0; i<leftArray.length; i++)
            {
              leftArray[i].yPos += s;
              scalingL = abs(map(leftArray[i].yPos, 0, height, -1,1));
              textSize(txtSize-(txtSize*scalingL));
              fill(255,100-(255*scalingL));
              
              if(scalingL < 0.1){ 
                fill(255);
              }
              
              
              if(leftArray[i].yPos >= height)
                {
                  leftArray[i].yPos -= height;
                  leftArray.splice(0, 0, leftArray[i]);
                   leftArray.pop();
                }
              
              text(leftArray[i].words,-50,leftArray[i].yPos,width/2,height);
            }

  
  //RIGHT TEXT
          textAlign(LEFT, TOP);
        
          for(var i=0; i<rightArray.length; i++)
            {
              rightArray[i].yPos -= s;
              scalingR = abs(map(rightArray[i].yPos, 0, height, -1,1));
              textSize(txtSize-(txtSize*scalingR));
              fill(255,100-(255*scalingR));
              
              if(scalingR < 0.1){ 
                fill(255);
              }
              
               if(rightArray[i].yPos < 0)
                {
                  rightArray[i].yPos = (rightArray.length*wordHeight)-rightArray[i].yPos;
                  rightArray.push(rightArray[i]);
                   rightArray.splice(0,1);
                }
              
              text(rightArray[i].words,width/2+50,rightArray[i].yPos-7,width/2,height);
            }
  

  sine+=TWO_PI/44.45;
  
  
  //SCHOOL OF
  textAlign(CENTER,TOP);
  fill(217,175,217);
  textSize(120);

  text('school'+'\n'+'of',0,0,width,height);
 
  
  //OUTLINE BOX
  rectMode(RADIUS);
  noFill();
  stroke(255,100);
  rect(width/2,height/2+20,width/2-10,36);
  
  
}

