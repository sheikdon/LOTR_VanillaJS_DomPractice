console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', 'middle-earth')
	// 2. use a for loop to iterate over the lands array that does the following:
	for  (let i = 0; i < lands.length; i++) {	
	//   2a. creates an article tag (there should be one for each land when the loop is done)
	const land = document.createElement('article');
	//   2b. gives each land article an `id` tag of the corresponding land name
	land.setAttribute('id', lands[i]);
	//   2c. includes an h1 with the name of the land inside each land article
	const landName = document.createElement('h1')
	landName.innerText = lands[i] 
	land.appendChild(landName)
	//   2d. appends each land to the middle-earth section
	middleEarth.appendChild(landName)
	// 3. append the section to the body of the DOM.
	middleEarth.appendChild(land);

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
const unorderedList = document.createElement('ul')
	// give each hobbit a class of `hobbit`
for (let i = 0; i < hobbits.length; i++) {
	const hobbitList = document.createElement('li')
	hobbitList.classList.add('hobbit')
	hobbitList.setAttribute('id', hobbits[i])
	unorderedList.setAttribute('id', 'moveHobbits')
	unorderedList.appendChild(hobbitList)
	document.querySelector('#The-Shire').appendChild(unorderedList)
}
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
const theRing = document.childElement('div')
	// give the div a class of `'magic-imbued-jewelry'`
	// add the ring as a child of `Frodo`
	theRing.classList.add('magic-imbued-jewelry')
	theRing.id = 'the-ring'
	document.querySelector('.hobbit').appendChild(theRing)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	let baddyList = document.createElement('ul')
	// give each of the baddies a class of "baddy"
	for (let baddy of baddies) {
		let baddyItem = document.createElement('li')
		baddyItem.classList.add('baddy')
	// remember to append them to Mordor
	baddyList.appendChild(baddyItem)
	}
	document.querySelector('#Mordor').appendChild(baddyList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
const buddiesAside = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
const buddiesList = document.createElement('ul')
buddiesAside.appendChild(buddiesList)
	for (buddy of buddies) {
		let buddyItem = document.createElement('li')
		buddyItem.innerText = buddy
		buddyItem.id = buddy
		buddiesList.appendChild(buddyItem)}
	// insert your aside as a child element of `rivendell`
	document.querySelector('#Rivendell').appendChild(buddiesAside)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
const theShire = document.querySelector('#The-Shire')
const hobbitList = theShire.querySelector('ul')
const rivendell = document.querySelector('#Rivendell')
rivendell.appendChild(hobbitList)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
const buddyList = document.querySelector('#Rivendell').querySelector('aside').querySelector('ul')
const buddyNodes = buddyList.querySelector('li')
for (let node of buddyNodes) {
	if(node.innerText === 'strider') {
		node.innerText = 'Aragorn'
	}
}


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	const theFellowshipDiv = document.createElement('div')
	const rivendell = document.querySelector('#Rivendell')
	theFellowshipDiv.id = 'the-fellowship'
	rivendell.appendChild(theFellowshipDiv)
	const fellowShipItems = rivendell.querySelectorAll('li')
	const newFellowshipList = document.createElement('ul')
	theFellowshipDiv.appendChild(newFellowshipList)
	for (let fellow of fellowShipItems) {
		newFellowshipList.appendChild(fellow)
		let member = fellow.textContent
		alert(`${member} has joined your party `)
	}
	let aside = rivendell.childNodes[1]
	let ul = rivendell.childNodes[2]
	rivendell.removeChild(aside)
	rivendell.removeChild(ul)




	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
	let fellowshipItems = document.querySelector('#the-fellowship').querySelectorAll('li')
	for (let fellow of fellowshipItems) {
		if (fellow.textContent === 'Gandalf the Grey') {
			fellow.textContent = 'Gandalf the White'
			fellow.style.background = 'white'
			fellow.style.border = 'thick solid grey'

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	alert('The Horn of Gondor has been blown')
	const theFellowshipList = document.querySelector('#the-fellowship').querySelector('ul')
	const fellowshipItems = theFellowshipList.childNodes
	let boromir = fellowshipItems[4]
	theFellowshipList.removeChild(boromir)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
	const theFellowshipList = document.querySelector('#the-fellowship').querySelector('ul')
	const fellowshipItems = theFellowshipList.childNodes
	const mordor = document.querySelector('#Mordor')
	const mordorList = mordor.querySelector('ul')
	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	mordor.appendChild(mountDoom)
	mordorList.appendChild(fellowshipItems[5])
	mordorList.appendChild(fellowshipItems[4])

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
	const gollumDiv = document.createElement('div')
	gollumDiv.id='gollum'
	const mordor = document.querySelector('#Mordor')
	const mountDoom = document.querySelector('#mount-doom')
	mordor.appendChild(gollumDiv)
	let theOneRing = document.querySelector('#the-ring')
	gollumDiv.appendChild(theOneRing)
	mountDoom.appendChild(gollumDiv)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
	const mordor = document.querySelector('#Mordor')
	const mountDoom = document.querySelector('#mount-doom')
	const theOneRing = document.querySelector('#the-ring')
	const gollum = document.querySelector('#gollum')
	const hobbitses = document.querySelectorAll('.hobbit')
	const hobbitUl = document.createElement('ul')
	const theShire = document.querySelector('#The-Shire')
	const baddies = document.querySelectorAll('.baddy')
	gollum.removeChild(theOneRing)
	mountDoom.removeChild(gollum)
	theShire.appendChild(hobbitUl)
	for (let hobbit of hobbitses) {
		hobbitUl.appendChild(hobbit)
	}
	for (let baddy of baddies) {
		mordor.querySelector('ul').removeChild(baddy)
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
}}
