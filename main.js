let greetings = [
	'Hello, I am', // English
	'Dobrý den, Jsem', // Czech
	'Dzień dobry, Jestem', // Polish
	'Hola, soy', // Spanish
	'Bonjour, je suis', // French
	'Ciao, sono', // Italian
	'Hallo, ich bin', // German
	'Olá, eu sou', // Portuguese
	'Привет, я', // Russian
];

const greetingLettersTime = 100; // Time till new letter comes up, in miliseconds
const greetingWaitOnComplete = 1000; // Time of how long to do nothing, in miliseconds

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
 * Deletes letters from the greetingElement on home pagr
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

setInterval(greetingAddition, greetingLettersTime);
setInterval(greetingDeletion, greetingLettersTime);

