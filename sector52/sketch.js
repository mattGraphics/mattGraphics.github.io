let reports = ['Anon Tip off','Psi Judge Hodges','Ray Accaciao','Ian Hooper','Tracy Franchina','Zala Guin','Calvin Hobbs','Hector Henry','Shandell Chantelle','Erica McKewen','Cheryl DeRier','Wullie Russell','Barrie McMahon','Moira Rose','Sean Gonzailvev','Edwardo Billinghurst','Bjorn Hanson','Matthew Johnman','Ralf Sanberg','Katrina Mellow','Ali Neumeyer','Colin MacMcGregor','Misa Gringold','Evan Hansan','Judge Clarke','Judge Lloyd','Judge Field','Judge Lee','Ridge','Psi Judge Evans','Psi Judge Zigorzelski','Judge McNeil','Moula','Nrooj','Gorge Van Vincent','Thom Erricson','Erric Thompson','Sara Keys','Dyke VanDyck','Bob Hairy Poppins','Jim Cricket','Pedro Pastell','Non Javereau','Lore Jucas','Betty Davis'];
let places = ['Resyk','Christopher Biggins Block','Jurgen Prochnow Con Apts','Sig Weaver Block','Djimon Hounsou Block','Mar King Aeroball Stadium','Alan Rickman High Rise','Amanda Tapping Block','Frank Langella block','Burgess Meredith Home for Eldsters','ZoeZaldana Block','Harrison Ford Block','Paul McCartney Broadwey','Phil Daniels Parkarama','Nathan Fillion Block','Hugo Weaving Tower','Zach Quinto Con Apts','EatyMeatyRamaLicious','Jumpin Joes Jumpin Jump Spot','MCTV52 Studio'];
let crimes = ['Homicide','Code 99 Red','Jaywalking','Assault','Kidnap','Burglary','robbery','Theft','Forgerey','Criminal Damage','Public Order Offence','Public Nuiscance','Back Up Required','Suspect Jimp at Scene','Gambling','Traffic Violation'];

let report = "";
let place = "";
let crime = "";

let button;

let cnv;


function setup() {
  cnv = createCanvas(350, 450);
  
  textSize(30);
  fill(255);
  
  cnv.position(windowWidth/2-(width/2), windowHeight/2-(height/2), 'fixed');
  background(0);
  
  button = createButton('generate');
  button.position(cnv.x+30, cnv.y+10);
  button.mousePressed(generate);
  button.addClass('bigB');
  

  //textAlign(CENTER, CENTER);
  
}

function draw() {
  //background(220);
  

}

function generate()
{
  background(0);
  report = random(reports);  
  place = random(places); 
  crime = random(crimes); 
  
  text(report+" reported the follwing crime: "+crime+" at the following location: "+place, 30, 100, 300,400);
  

}

function windowResized() {
  cnv.position(windowWidth/2-(width/2), windowHeight/2-(height/2), 'fixed');
  button.position(cnv.x+30, cnv.y+10);
}
