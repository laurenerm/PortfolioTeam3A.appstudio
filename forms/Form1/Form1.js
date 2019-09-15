let bedroomCount= 1
let x = 1
let y = 1
var roomArray= []

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
alert("Oopsies, you went too far and ran into the wall!")
x = (x - units)
}

//this makes sure that the player remains within the eastern and western walls
if (y < 0 || y > 15) {
alert("Oopsies, you went too far and ran into the wall!")
y = (y - units)
}

switch (bedroomCount) {

  case 6: alert('Congratulations! You have completed the tour of the house!') 
  
  default : 
  
if (x > 10 && x < 15 && y > 10 && y < 20) {
  alert('Welcome to the Master Bedroom.')
  roomArray.includes('Master Bedroom')
  if ('true') {alert('You have already been here')}
  else if ('false') {
  bedroomCount = bedroomCount + 1
  roomArray.push('Master Bedroom')}
  
}else if (x > 5 && x < 10 && y > 10 && y < 20) {
  alert('Welcome to the Bathroom.')
  roomArray.includes('Bathroom')
  if ('true') {alert('You have already been here')}
  else if ('false') {
  bedroomCount = bedroomCount + 1
  roomArray.push('Bathroom')} 
}else if (x > 0 && x < 5 && y > 10 && y < 20) {
  alert('Welcome to the Closet.')
  if roomArray.includes('Closet') {alert('You have already been here')}
  else {
  bedroomCount = bedroomCount + 1
  roomArray.push('Closet')} 
  
}else if (x > 0 && x < 5 && y > 0 && y < 10) {
  alert('Welcome to the Living Room! this is where we gather to watch TV');
  roomArray.includes('Living Room')
  if ('true') {alert('You have already been here')}
  else if ('false') {
  bedroomCount = bedroomCount + 1
  roomArray.push('Living Room')} 
//coordinates for the kitchen
else if (x > 5 && x < 10 && y > 0 && y < 10) {
  alert('Welcome to the Kitchen! This is where we cook and eat.');
roomArray.includes('Kitchen')
  if ('true') {alert('You have already been here')}
  else if ('false') {
  bedroomCount = bedroomCount + 1
  roomArray.push('Kitchen')} 
  //coordinates for the game room
else if (x > 10 && x < 15 && y > 0 && y < 10) {
  alert('Welcome to the Game Room! This is where we like to hang out');
 roomArray.includes('Game Room')
  if ('true') {alert('You have already been here')}
  else if ('false') {
  bedroomCount = bedroomCount + 1
  roomArray.push('Game Room')} 

}



  
  