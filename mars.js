
// Inital Alert messages
alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert("Let's start!");

// Prompt function
const username = prompt("Hi there. What's your name?");

// Explain the Mars game
alert(`Hi ${username} — Welcome to The Mars Adventure Game.`);
alert('Yesterday, you received a call from your good friend at NASA');
alert('They need someone to go to Mars this weekend, and YOU’VE been chosen!!');

// Excitement question prompt
let excitement = prompt(`Are you exicted ${username} (Type Y or N)?`);
excitement = excitement.toUpperCase();

// Conditional message output based on users response. 
if (excitement === 'Y') { 
    alert('I knew you’d say that. It’s so cool that you’re going to Mars!');
} 

if (excitement === 'N') {
    alert("Well, it's too late to back out now.");
  }

// Prompt user for the number of suitcases they will bring
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');

// Convert input to a number
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
    alert('That’s way too many. You’ll have to pack more lightly.');
    alert('Please try to fit your stuff into 2 suitcases.');
} else {
    alert('Perfect. You’ll certainly fit in the spaceship!');
}


// Prompt the user to add a companion animal and ask what type. 
alert("You're allowed to bring one companion animal with you.");

const companionType = prompt('What kind of companion animal would you like to bring?');

let companionName = prompt("What is your companion's name?");
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = firstLetter + otherLetters;

alert(`Cool, so you're bringing ${companionName} the ${companionType}.`)






// Prompting the user for their choice of decor
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);


// Prompt function
let decorChoice = prompt('Which decor would you like? Choose A, B, or C.');
decorChoice = decorChoice.toUpperCase();    // Clean up user input



let decor;
if (decorChoice === 'A') {
  decor = 'Sleek, modern minimalism';
}
else if (decorChoice === 'B') {
    decor = 'Retro/vintage space age';
  }
else if (decorChoice === 'C') {
  decor = 'Victorian-era steampunk';
}


// Alert summarizing the trip
alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);














// Setting the timer countdown
let timer = 5;

while (timer > 0 ) {
  alert(`${timer}...`);
  timer = timer - 1 ;
}
alert('*** LIFTOFF ***');

