// const annoyer = {
//     phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
//     pickPhrase() {
//         // const {
//         //     phrases
//         // } = this;
//         const idx = Math.floor(Math.random() * this.phrases.length);
//         return this.phrases[idx]
//     },
//     start() {
//         this.timerId = setInterval(() => {
//             console.log(this.pickPhrase())
//         }, 3000);
//     },
//     stop() {
//         clearInterval(this.timerId);
//         console.log("PHEW THANK HEAVENS THAT IS OVER!");
//     }
// }

// function initializeDeck() {
//     const deck =[];
//     const suits=['hearts', 'diamonds', 'spades', 'clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for(let value of values.split(',')) {
//         for(let suit of suits) {
//             // console.log("value  "+ value, " Suit "+suit);
//             deck.push({value, suit});
//         } 
//     }
//     return deck;
// }

// function drawCard(deck, drawCards) {
//     const card = deck.pop();
//     drawCards.push(card);
//     return card;
// }

// function drawMultiple(numCards, deck, drawnCards) {
//     const cards = [];
//     for(let i =0;i<numCards;i++) {
//         cards.push(drawCard(deck, drawnCards));
//     }
//     return cards;
// }

// function shufffle(deck) {
//     for (let i = deck.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         if( i !== j) {
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
//     return deck;
// }

// const firstDeck = initializeDeck();
// const drawCards =[];
// shufffle(firstDeck);
// const hands1 = drawMultiple(2, firstDeck, drawCards);
// const hands2 = drawMultiple(2, firstDeck, drawCards);
// const pokerHand = drawMultiple(5, firstDeck, drawCards);


// // We have to create a bunch of variables:

// const makeDeck = () => {
//     return {
//         deck:[],
//         drawnCards:[],
//         suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//         values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//         initializeDeck() {
//             const { suits, values, deck} = this;
//             for (let value of values.split(',')) {
//                 for (let suit of suits) {
//                     deck.push({value, suit});
//                 }
//             }
//         },
//         drawCard() {
//             const card = this.deck.pop();
//             this.drawnCards.push(card);
//             return card;
//         },
//         drawMultiple(numCards) {
//             const cards = [];
//             for(let i=0;i<numCards;i++) {
//                 cards.push(this.drawCard());
//             }
//             return cards;
//         },
//         shufffle() {
//             const { deck} = this;
//             for(let i = deck.length-1;i>0;i--) {
//                 let j = Math.floor(Math.random() *(i+1));
//                 if( i !== j) {
//                     [deck[i], deck[j]] = [deck[j], deck[i]];
//                 }          
//             }
//         }       
//     }
// }
// const myDeck = makeDeck();
// myDeck.initializeDeck();
// myDeck.shufffle();
// const h1 = myDeck.drawMultiple(2);
// const h2 = myDeck.drawMultiple(2);
// const h3 = myDeck.drawMultiple(5);

// const deck2 =makeDeck();
// deck2.initializeDeck();

// const newImg = document.createElement('img');
// newImg.src = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
// newImg.style.width = "300px";
// document.body.appendChild(newImg);
// const newLink = document.createElement('a');
// newLink.innerText ="Mr. Bubz Video! CLICK MEEE";

// newLink.href ='https://www.youtube.com/watch?v=QQNL83fhWJU';

// const firstP = document.querySelector('p');
// firstP.appendChild(newLink);

// const parentUL = document.querySelector('ul');
// const newLI = document.createElement('li');
// newLI.innerText = 'I AM A NEW LIST ITEM!';
// parentUL.prepend(newLI) 
// const targetLI = document.querySelectorAll('li.todo')[2] //3rd li with class of 'todo'
// // To insert our new LI before targetLI...
// //parent.insertBefore(what to insert, where to insert)
// parentUL.insertBefore(newLI, targetLI);
// xs
// const removeMe = document.querySelector('.special')
// //We call removeChild() on the parent element and pass in the element we want to remove:
// removeMe.parentElement.removeChild(removeMe)
// const h1 = document.querySelector('h1');
// h1.remove();
// const warriorsGames = [{
//     awayTeam: {
//       team: 'Golden State',
//       points: 119,
//       isWinner: true
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 106,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 105,
//       isWinner: false
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 127,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 126,
//       isWinner: true
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 85,
//       isWinner: false
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 92,
//       isWinner: false
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 95,
//       isWinner: true
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 94,
//       isWinner: false
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 98,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 115,
//       isWinner: true
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 86,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 101,
//       isWinner: true
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 92,
//       isWinner: false
//     }
//   }
// ]
// const makeChart = (games, targetTeam) => {
//     const ulParent = document.createElement('ul');
//     for(let game of games) {
//         const gameLi = document.createElement('li');
//         gameLi.innerHTML = getScoreLine(game);
//         gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
//         ulParent.appendChild(gameLi);
//     }
//     return ulParent;
// }

// const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
//     const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
//     return target.isWinner;
// }

// const getScoreLine = ({ homeTeam, awayTeam }) => {
//       const {
//         team: hTeam,
//         points: hPoints
//       } = homeTeam;
//       const {
//         team: aTeam,
//         points: aPoints
//       } = awayTeam;

      
//       const teamNames =`${aTeam} @ ${hTeam}`;
//       let scoreLine;
//       if(aPoints > hPoints) {
//         scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//       } else {
//         scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//       }
//       return `${teamNames} ${scoreLine}`;
// }
// const gsChart = makeChart(warriorsGames, 'Golden State');
// const hrChart = makeChart(warriorsGames, 'Houston');

// const gsSection = document.querySelector('#gs');
// const houstonSection = document.querySelector('#hr');

// gsSection.appendChild(gsChart);
// houstonSection.appendChild(hrChart);

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     alert('CLICKED!!!');
// });

// btn.addEventListener('click', function() {
//     console.log('SECOND THING!!');
// });

// btn.addEventListener('mouseover', function() {
//     btn.innerText = 'STOP TOUCHING ME';
// });

// btn.addEventListener('mouseout', function() {
//     btn.innerText = 'Click Me!';
// });

// window.addEventListener('scroll',function() {
//     console.log('STOP SCROLLING!!');
// });

// const btn = document.querySelector('button');

// btn.addEventListener('mouseover' , function() {
//     console.log('MOUSED OVER ME!');
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);
//     btn.style.left = `${width}px`;
//     btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', function() {
//     btn.innerText ='YOU GOT ME!';
//     document.body.style.backgroundColor = 'green';
// });

// 

// const input = document.querySelector('#username');

// input.addEventListener('keydown', function(e) {
//     console.log('KEY DOWN!')
// });

// input.addEventListener('keyup', function(e) {
//     console.log('KEY UP!')
// });

// input.addEventListener('keyup', function(e) {
//     console.log('KEY PRESS!')
// });

// const addItemInput = document.querySelector('#addItem');
// const itemsUL = document.querySelector('#items');

// addItemInput.addEventListener('keypress', function(e) {
//     if(e.key == 'Enter') {
//         if(!this.value) return;

//         const newItemText = this.value;
//         const newItem = document.createElement('li');
//         newItem.innerText = newItemText;
//         itemsUL.appendChild(newItem);
//         this.value = '';
//     }
// });

// function isTouching(a, b) {
// 	const aRect = a.getBoundingClientRect();
// 	const bRect = b.getBoundingClientRect();

// 	return !(
// 		aRect.top + aRect.height < bRect.top ||
// 		aRect.top > bRect.top + bRect.height ||
// 		aRect.left + aRect.width < bRect.left ||
// 		aRect.left > bRect.left + bRect.width
// 	);
// }

// const init = () => {
//     const avatar = document.querySelector('#player');
//     const coin = document.querySelector('#coin');
//     moveCoin();
//     window.addEventListener('keyup', function(e) {
//         if(e.key === 'ArrowDown' || e.key === 'Down') {
//             moveVertical(avatar, 50);
//         }
//         else if(e.key === 'ArrowUp' || e.key === 'Up') {
//             moveVertical(avatar, -50);
//         }
//         else if(e.key === 'ArrowRight' || e.key === 'Right') {
//             moveHorizontal(avatar, 50);
//             avatar.style.transform = 'scale(1,1)';
//         }
//         else if(e.key === 'ArrowLeft' || e.key === 'Left') {
//             moveHorizontal(avatar, -50);
//             avatar.style.transform = 'scale(-1,1)';
//         }
//         if(isTouching(avatar, coin)) moveCoin();
//     });
// };

// const moveVertical =(element, amount) => {
//     const currTop = extractPos(element.style.top);
//     element.style.top = `${currTop + amount}px`;
// }

// const moveHorizontal = (element, amount) => {
//     const currLeft = extractPos(element.style.left);
//     element.style.left = `${currLeft + amount}px`;
// }

// const extractPos = pos => {
//     if(!pos) return 100;
//     return parseInt(pos.slice(0, -2));
// }

// const moveCoin = () => {
//     const x = Math.floor(Math.random() * window.innerHeight);
//     const y = Math.floor(Math.random() * window.innerWidth);
//     console.log("x  ",x ,"  y  ", y);
    
//     coin.style.top = `${y}px`;
//     coin.style.left = `${x}px`;
// };

// init();

// const form = document.querySelector('#signup-form');
// const creditCardInput = document.querySelector('#cc');
// const termsCheckbox = document.querySelector('#terms');
// const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
// 	console.log('cc', creditCardInput.value);
// 	console.log('terms', termsCheckbox.checked);
// 	console.log('veggieSelect', veggieSelect.value);
// });

// const creditCardInput = document.querySelector('#cc');
// const termsCheckbox = document.querySelector('#terms');
// const veggieSelect = document.querySelector('#veggie');
// const formData = {};
// ONE callback works for any number of inputs!!
// for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
//     input.addEventListener('input', ({target}) => {
//         const {name, type, value, checked} = target;
//         formData[name] = type ==='checkbox' ? checked : value;
//         console.log(formData);
//     });
// }

// for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
//     input.addEventListener('change', ({target}) => {
//         const {name, type, value, checked} = target;
//         formData[name] = type ==='checkbox' ? checked : value;
//         console.log(formData);
//     });
// }

//We could use hard-coded callbacks:
// creditCardInput.addEventListener('input', e => {
//     console.log('CC CHANGED!', e);
//     formData['cc'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', e => {
//     console.log('CHECKBOX!', e);
//     formData['agreeToTerms'] = e.target.checked;
// });

// veggieSelect.addEventListener('input', e => {
//     console.log('VEGGIE!', e);
//     formData['veggie'] = e.target.value;
// });

// const btn = document.querySelector('button');

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
//         const bodyBoundary = document.body.clientWidth;
//         const elRight = element.getBoundingClientRect().right;
//         const currLeft = element.getBoundingClientRect().left;
//         if(elRight + amount > bodyBoundary) {
//             onFailure();
//         }
//         else {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
//         }
//     }, delay);
// };

// moveX(bttn,300,1000,() => {
//     moveX(btn, 300,1000, () => {
//         moveX(btn,300,1000, () => {
//             moveX(btn,300,1000, () => {
//                 moveXbtn,(300,1000,() =>{

//                 }, ()=> {
                    
//                 });
//             },() => {
//                 alert('CANNOT MOVE FURTHER!');
//             });
//         }, () => {
//             alert('CANNOT MOVE FURTHER!');
//         });
//     }, () => {
//         alert('CANNOT MOVE FURTHER!');
//     });
// }, () => {
//     alert('CANNOT MOVE FURTHER!');
// });

// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );

// const willGetYouADog = new Promise((resol, rej) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         if(rand < 0.5) {
//             resol();
//         } else {
//             rej();
//         }
//     }, 5000);
// });

// willGetYouADog.then(() => {
//     console.log('YAY WE GOT A DOG!!!!');
// }).catch(() => {
//     console.log(':( NO DOG');
// });

// const makeDogPromise = () => {
//     return new Promise((resol, rej) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if(rand < 0.5) {
//                 resol();
//             } else {
//                 rej();
//             }
//         }, 5000);
//     }); 
// };

// makeDogPromise().then(() => {
//     console.log('YAY WE GOT A DOG!!!!');
// }).catch(() => {
//     console.log(':( NO DOG');
// });

// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				'/users' : [
// 					{ id: 1, username: 'Bilbo' },
// 					{ id: 5, username: 'Esmerelda' }
// 				],
// 				'/about' : 'This is the about page!'
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data }); //resolve with a value!
// 			}
// 			else {
// 				reject({ status: 404 }); //reject with a value!
// 			}
// 		}, 1000);
// 	});
// };
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log('Status Code', res.status);
// 		console.log('Data', res.data);
// 		console.log('REQUEST WORKED!');
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log('REQUEST FAILED');
//     });
    
//     fakeRequest('/dogs')
// 	.then((res) => {
// 		console.log('Status Code', res.status);
// 		console.log('Data', res.data);
// 		console.log('REQUEST WORKED!');
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log('REQUEST FAILED');
// 	});

// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				'/users'        : [
// 					{ id: 1, username: 'Bilbo' },
// 					{ id: 5, username: 'Esmerelda' }
// 				],
// 				'/users/1'      : {
// 					id        : 1,
// 					username  : 'Bilbo',
// 					upvotes   : 360,
// 					city      : 'Lisbon',
// 					topPostId : 454321
// 				},
// 				'/users/5'      : {
// 					id       : 5,
// 					username : 'Esmerelda',
// 					upvotes  : 571,
// 					city     : 'Honolulu'
// 				},
// 				'/posts/454321' : {
// 					id    : 454321,
// 					title :
// 						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
// 				},
// 				'/about'        : 'This is the about page!'
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data }); //resolve with a value!
// 			}
// 			else {
// 				reject({ status: 404 }); //reject with a value!
// 			}
// 		}, 1000);
// 	});
// };

// fakeRequest('/users')
// .then((res) => {
//     console.log(res);
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`); 
// })
// .then((res) =>{
//     console.log(res);
//     const postId = res.data.topPostId;
//     return fakeRequest(`/posts/${postId}`);
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log('OH NO!', err);
// });

// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundary = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;
// 			if (elRight + amount > bodyBoundary) {
// 				reject({ bodyBoundary, elRight, amount });
// 			}
// 			else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// 	});

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	// for (let planet of data.results) {
// 	// 	console.log(planet.name);
// 	// }
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const flimData = JSON.parse(this.responseText);
// 		console.log(flimData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });

// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!!!!');
// });

// firstReq.open('GET','https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

// fetch('https://swapi.co/api/planets/')
// .then((response) => {
// 	if(!response.ok) {
// 		throw new Error(`Status Code Error: ${response.status}`);
// 	} 
// 	response.json().then((data) => {
// 		for (let planet of data.results) {
// 			console.log(planet.name);
// 		}
// 	});

// })
// .catch((err) => {
// 	console.log('SOMETHING WENT WRONG WITH FETCH!');
// 	console.log(err);
// });
// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .catch((err) => {
// 	console.log('SOMETHING WENT WRONG WITH FETCH!');
// 	console.log(err);
// });
// axios.get('https://swapi.co/api/planets/')
// .then((res ) => {
// 	console.log(res.data)
// })
// .catch((err) => {
// 	console.log('IN CATCH CALLBACK!!!');
// 	console.log(err);
// });

// axios.get('https://swapi.co/api/planetaslkjdaklsjds/')
// .then((res) => {
// 	console.log(res.data);
// })
// .catch((err) => {
// 	console.log('IN CATCH CALLBACK!!!');
// 	console.log(err);
// });

// const printPlanets = (res) => {
// 	console.log(res.data.results);
// 	for (let planet of res.data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(res.data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	console.log(url);
// 	return axios.get(url);
// };

// fetchNextPlanets()
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(printPlanets)
// .catch((err) => {
// 	console.log('SOMETHING WENT WRONG WITH FETCH!');
// 	console.log(err);
// });

// async function greet() {
// 	return 'Hello!!!';
// }
// greet().then((val) => {
// 	console.log('PROMISE RESOLVED WITH: ', val);
// });

// async function add(x,y) {
// 	if(typeof x !== 'number' || typeof y !== 'number') {
// 		throw 'X and Y must be numbers'
// 	}
// 	return x+y;
// }

// add(6,7)
// .then((val) => {
// 	console.log('PROMISE RESOLVED WITH: ', val);
// })
// .catch((err) => {
// 	console.log('PROMISE REJECTED WITH: ', err);
// })

// async function getPlanets() {
// 	const res = await axios.get('https://swapi.co/api/planets/');
// 	console.log(res.data);
// };

// getPlanets();

// async function getPlanets() {
// 	try {
// 		const res = await axios.get('https://swapi.co/api/planets/');
// 		console.log(res.data);
// 	}catch(e) {
// 		console.log('IN CATCH!', e);
// 	}
// };

// getPlanets();

// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundary = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;
// 			if (elRight + amount > bodyBoundary) {
// 				reject({ bodyBoundary, elRight, amount });
// 			}
// 			else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// const btn = document.querySelector('button');
// async function animateRight(el, amt) {
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// }
// animateRight(btn, 100).catch((err) => {
// 	console.log('Hit the right edge! Now Moving left!');
// 	animateRight(btn, -100);
// });

// String.prototype.yell = function() {
// 	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
// }

// Array.prototype.pop = function() {
// 	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
// }

// const nums = [ 6, 7, 8, 9 ];
// nums.pop();

function makeColor(r,g,b) {
	const color = {}
	color.r = r;
	color.g = g;
	color.b = b;

	color.rgb = function() {
		const {r,g,b} = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const {r,g,b} = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor  = makeColor(35, 255, 150);
firstColor.hex();
firstColor.rgb();

const black = makeColor(0,0,0);
black.rgb();
black.hex();