let bedroomCount= 1
let x = 1
let y = 1

let direction = prompt("Welcome to the living room! Which direction do you want to move (north, east, south, or west)")
let units = Number(prompt("How many units do you want to move?"))

if (direction == 'north') {
   y = (y + units)
} else if (direction == 'east') {
   x = (x + units)
} else if (direction == 'south') {
  y = (y - units)
} else if (direction == 'west'){
  x = (x - units)
}
  if (x < 0 || x > 15) {
alert("oopsies, you went too far and ran into the wall!")
x = (x - units)
}

//this makes sure that the player remains within the eastern and western walls
if (y < 0 || y > 15) {
alert("oopsies, you went too far and ran into the wall!")
y = (y - units)
}

switch (bedroomCount) {

  case 6:
  
  default : 
  
if (x > 10 && x < 15 && y > 10 && y < 20) {
  alert('Welcome to the Master Bedroom.')
  bedroomCount = bedroomCount + 1 
}else if (x > 5 && x < 10 && y > 10 && y < 20) {
  alert('Welcome to the Bathroom.')
  bedroomCount = bedroomCount + 1 
}else if (x > 0 && x < 5 && y > 10 && y < 20) {
  alert('Welcome to the Closet.')
  bedroomCount = bedroomCount + 1 
}else if (x > 0 && x < 5 && y > 0 && y < 10) {
  alert('Welcome to the living room! this is where we gather to watch TV');
  bedroomCount= bedroomCount + 1;}
//coordinates for the kitchen
else if (x > 5 && x < 10 && y > 0 && y < 10) {
  alert('Welcome to the kitchen! This is where we cook and eat.');
  bedroomCount= bedroomCount + 1;}
  //coordinates for the game room
else if (x > 10 && x < 15 && y > 0 && y < 10) {
  alert('Welcome to the game room! This is where we like to hang out');
  bedroomCount= bedroomCount + 1;}

}



  
  