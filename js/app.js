// console.log('homework');

// I'm pretty sure that I am over thinking this...

// 1. I would create a function with use if/else logic and booleans for the light switch
//	  const lightSwitch (switch) => {	
//		if(switch = true) {
//	console.log('The light is on.')
//	  }	else {
//	  	console.log('The light is off');
//	  }
//	}

// 2. You would use a string for a user's e-mail address
//		const userEmail = 'Tophy03@gmail.com'

// 3. I would use an object to represent thsi
//		const spaceship = {
// 		hull: 'Spacetanium',
// 		weapons: 'Laser Blasters',
// 		grappler: 'Tractor Beam',
// 		engine: 'Warp Drive'
// }

// 4. I would use an Array
	// const gaStudents = ['Chris L', 'Charlotte', 'Greg', 'Andy', 'Chris R', 'Filip', 'Josh', 'Ashley', 'John']

// 5. I would use an array of objects
	// const gaStudents = [{name: 'Chris L', location: 'Chicago'}, {name: 'Charlotte', location: 'Paris'}, etc...]
// 6.I would use an array of objects with each with its own array
	// const gaStudents = [
		// {name: 'Chris L', location: 'Chicago', favShows: ['some show', 'some other show', 'hey another one']}, 
		// {name: 'Charlotte', location: 'Paris', favShows: ['anime show', 'some other anime show', 'hey another one']}, 
		// etc...]

//	Take it Easy

// 1.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// 2.
console.log(rainbow[4]);
// 3.
const chris = {
	favFood: 'Hot Wings',
	hobby: 'Writing',
	currentTown: 'Chicago',
	favDataType: 'Objects'
}
// 4.
console.log(chris.hobby);

// Crazy Object

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

// 1.
	console.log(crazyObject.taco[1].salsa[5]);
// 2.
	console.log(crazyObject.larry.quotes[0])
// 3. 
	console.log(crazyObject.larry.characters[2].favourtieHobby);
// 4.
	console.log(crazyObject.larry.nicknames[1])
// 5.
	console.log(crazyObject.larry.characters[1]);

// Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6 = null;

console.log(inception);



