let greetings = [
	'Hello, I am', // English
	'Dobrý den, jsem', // Czech
	'Dzień dobry, jestem', // Polish
	'Hola, soy', // Spanish
	'Bonjour, je suis', // French
	'Ciao, sono', // Italian
	'Hallo, ich bin', // German
	'Olá, eu sou', // Portuguese
	'Привет, я', // Russian
];

let aboutMeInfo = [
	`Hello, I'm Jakub Galuszka from the Czech Republic.`,
	`I am currently Studying at Střední Průmyslová Škola Elektrotechnická Havířov.`,
	`I'd like to work as a Developer in a FAANG company when i finish my learning journey.`,
];

const greetingLettersTime = 100; // Time till new letter comes up, in miliseconds
const greetingWaitOnComplete = 1000; // Time of how long to do nothing, in miliseconds
const writeAboutMeTime = 10; // How long till another letter can be added in the about me section

let greetingElement = document.querySelector('#greeting'); // The element where the greeting belongs
let newGreeting = greetings[0]; // The greeting that should be used
let greetingIsDone = false; // If the greeting is complete

/**
 * Used in async function to wait
 * @param {int} ms How many miliseconds to wait
 */
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Adds letters from greetings to the greetingElement on home page
 */
async function greetingAddition() {
	if (greetingIsDone) return;
	greetingElement.innerHTML = newGreeting.slice(0, greetingElement.innerHTML.length + 1);
	if (greetingElement.innerHTML.length == newGreeting.length) {
		await sleep(greetingWaitOnComplete);
		greetingIsDone = true;
	}
}

/**
 * Deletes letters from the greetingElement on home page
 */
async function greetingDeletion() {
	if (!greetingIsDone) return;
	greetingElement.innerHTML = greetingElement.innerHTML.slice(0, greetingElement.innerHTML.length - 1);
	if (greetingElement.innerHTML.length == 0) {
		newGreeting = greetings[(greetings.indexOf(newGreeting) + 1) % (greetings.length - 1)];
		await sleep(greetingWaitOnComplete);
		greetingIsDone = false;
	}
}

/**
 * Function that writes the about me texts on site load
 */
function createAboutMe() {
	// Define element
	const element = document.querySelector('#about-me-container');

	// Adds the element children, if not present already
	if (element.children.length == 0) {
		for (let i = 0; i < aboutMeInfo.length; i++) {
			let newDiv = document.createElement('div');
			element.appendChild(newDiv);
		}
	}

	// Adds individual letters to the texts
	for (let i = 0; i < element.children.length; i++) {
		element.children[i].innerHTML = aboutMeInfo[i].slice(0, element.children[i].innerHTML.length + 1);
	}
}

// Make it function only on the right site
if (document.querySelector('#about-me-container') != undefined) {
	setInterval(createAboutMe, writeAboutMeTime);
}

// Make it function only on the right site
if (greetingElement != undefined) {
	setInterval(greetingAddition, greetingLettersTime);
	setInterval(greetingDeletion, greetingLettersTime);
}

