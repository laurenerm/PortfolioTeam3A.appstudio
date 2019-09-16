switch (bedroomCount) {

  case 6:

    alert("Congratulations, you have completed The Big Adventure. Thanks for playing")
    break;
  
  default : 
  

  if (x > 10 && x < 15 && y > 10 && y < 20) {
    if (roomArray.includes('Master Bedroom')) {
      alert('You have already been here')
      
      direction = prompt("Which direction do you want to move (north, east, south, or west)")
      units = Number(prompt("How many yards do you want to move?"))
      
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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

    } else {
        alert('Welcome to the Master Bedroom.')
        bedroomCount = bedroomCount + 1
        
        roomArray.push('Master Bedroom')

        
        direction = prompt("Which direction do you want to move (north, east, south, or west)")
        units = Number(prompt("How many yards do you want to move?"))
        
        if (direction == 'north') {
          y = (y + units)
        } else if (direction == 'east') {
          x = (x + units)
        } else if (direction == 'south') {
          y = (y - units)
        } else if (direction == 'west') {
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
        
        
        }
  
  } else if (x > 5 && x < 10 && y > 10 && y < 20) {
    if (roomArray.includes('Bathroom')) {
      alert('You have already been here')
      
      direction = prompt("Which direction do you want to move (north, east, south, or west)")
      units = Number(prompt("How many yards do you want to move?"))
      
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      } else {
        alert('Welcome to the Bathroom.')
        bedroomCount = bedroomCount + 1
        
        roomArray.push('Bathroom')
        
        direction = prompt("Which direction do you want to move (north, east, south, or west)")
        units = Number(prompt("How many yards do you want to move?"))
        
        
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
        }
        
  } else if (x > 0 && x < 5 && y > 10 && y < 20) {
    if (roomArray.includes('Closet')) {
      alert('You have already been here')
      
      direction = prompt("Which direction do you want to move (north, east, south, or west)")
      units = Number(prompt("How many yards do you want to move?"))
      
      
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      
      } else {
        alert('Welcome to the Closet.')
        bedroomCount = bedroomCount + 1
        
        roomArray.push('Closet')
        
        direction = prompt("Which direction do you want to move (north, east, south, or west)")
        units = Number(prompt("How many yards do you want to move?"))
        
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      
        } 
  
  } else if (x > 0 && x < 5 && y > 0 && y < 10) {
    if (roomArray.includes('Living Room')) {
      alert('You have already been here')
      
      direction = prompt("Which direction do you want to move (north, east, south, or west)")
      units = Number(prompt("How many yards do you want to move?"))
      
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      
      } else {
        alert('Welcome to the Living Room! this is where we gather to watch TV');
        
        roomArray.push('Living Room')
        
        direction = prompt("Which direction do you want to move (north, east, south, or west)")
        units = Number(prompt("How many yards do you want to move?"))
        
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
        } 

  } else if (x > 5 && x < 10 && y > 0 && y < 10) {
    if (roomArray.includes('Kitchen')) {
      alert('You have already been here')
    
      direction = prompt("Which direction do you want to move (north, east, south, or west)")
      units = Number(prompt("How many yards do you want to move?"))
      
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      } else {
        alert('Welcome to the Kitchen! This is where we cook and eat.');
        bedroomCount = bedroomCount + 1
      
        roomArray.push('Kitchen')
      
        direction = prompt("Which direction do you want to move (north, east, south, or west)")
        units = Number(prompt("How many yards do you want to move?"))
        
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      } 
    
  } else if (x > 10 && x < 15 && y > 0 && y < 10) {
    if (roomArray.includes('Game Room')) {
      alert('You have already been here')
      
      direction = prompt("Which direction do you want to move (north, east, south, or west)")
      units = Number(prompt("How many yards do you want to move?"))
      
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      } else {
        alert('Welcome to the Game Room! This is where we like to hang out');
        bedroomCount = bedroomCount + 1
      
        roomArray.push('Game Room')
      
        direction = prompt("Which direction do you want to move (north, east, south, or west)")
        units = Number(prompt("How many yards do you want to move?"))
        
      if (direction == 'north') {
        y = (y + units)
      } else if (direction == 'east') {
        x = (x + units)
      } else if (direction == 'south') {
        y = (y - units)
      } else if (direction == 'west') {
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
      
      } 
    }
}