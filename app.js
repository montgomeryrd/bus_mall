'use strict';

//Event Listener
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var counter = 0;
one.addEventListener('click', listen);
two.addEventListener('click', listen);
three.addEventListener('click', listen);

//Constructor Function
function Product(name, filepath, totalClicks, numberOfTimesShown) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
  this.numberOfTimesShown = 0;
}

//Object Literal
var thumbsUp = {
  name: 'thumbs',
  filepath: './Images/thumbs.png'
};

//Instantiate Objects
var bag = new Product('bag', './Images/bag.jpg');
var banana = new Product('banana', './Images/banana.jpg');
var bathroom = new Product('bathroom', './Images/bathroom.jpg');
var boots = new Product('boots', './Images/boots.jpg');
var breakfast = new Product('breakfast', './Images/breakfast.jpg');
var bubblegum = new Product('bubblegum', './Images/bubblegum.jpg');
var chair = new Product('chair', './Images/chair.jpg');
var cthulhu = new Product('cthulhu', './Images/cthulhu.jpg');
var dogDuck = new Product('dog-duck', './Images/dog-duck.jpg');
var dragon = new Product('dragon', './Images/dragon.jpg');
var pen = new Product('pen', './Images/pen.jpg');
var petSweep = new Product('pet-sweep', './Images/pet-sweep.jpg');
var scissors = new Product('scissors', './Images/scissors.jpg');
var shark = new Product('shark', './Images/shark.jpg');
var sweep = new Product('sweep', './Images/sweep.png');
var tauntaun = new Product('tauntaun', './Images/tauntaun.jpg');
var unicorn = new Product('unicorn', './Images/unicorn.jpg');
var usb = new Product('usb', './Images/usb.gif');
var waterCan = new Product('water-can', './Images/water-can.jpg');
var wineGlass = new Product('wine-glass', './Images/wine-glass.jpg');

//My array of Instantiated Objects
var images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

/*var votes = [];

function productVotes(){
  for(var i = 0 ; i < images.length ; i++) {
    votes.push(0);
    console.log(votes);
  }
}*/

//Random Number Generator
//Generates a set of 3 random numbers that are each different from 0 to 19
var myNumbers = [];
var randomNumber;

function randomNums (){
  randomNumber = Math.floor(Math.random() * images.length);
  myNumbers.push(randomNumber);
  randomNumber = Math.floor(Math.random() * images.length);
  while (randomNumber === myNumbers[0]) {
    randomNumber = Math.floor(Math.random() * images.length);
  }
  myNumbers.push(randomNumber);
  randomNumber = Math.floor(Math.random() * images.length);
  while (randomNumber === myNumbers[0] || randomNumber === myNumbers[1]) {
    randomNumber = Math.floor(Math.random() * images.length);
  }
  myNumbers.push(randomNumber);
}

//checkNums checks my nums.
//It generates a new set of numbers that aren't repeated from the previous set of numbers.
var lastSet = [];

function checkNums(){
  lastSet.push(myNumbers[0], myNumbers[1], myNumbers[2]);
  myNumbers = [];
  var i = 0;

  while( i < 3 ) {
    randomNumber = Math.floor(Math.random() * images.length);
    while (randomNumber === lastSet[0] || randomNumber === lastSet[1] || randomNumber === lastSet[2] || randomNumber === myNumbers[0] || randomNumber === myNumbers[1]) {
      randomNumber = Math.floor(Math.random() * images.length);
    }
    myNumbers.push(randomNumber);
    i++;
  }
  lastSet = [];
}

randomNums();
console.log('Initial Three Numbers:', myNumbers);

one.setAttribute('src', images[myNumbers[0]].filepath);
console.log(one);
two.setAttribute('src', images[myNumbers[1]].filepath);
console.log(two);
three.setAttribute('src', images[myNumbers[2]].filepath);
console.log(three);


//Event Listener Function
function listen(e) {
  if (counter === 25) {
    one.setAttribute('src', thumbsUp.filepath);
    two.setAttribute('src', thumbsUp.filepath);
    three.setAttribute('src', thumbsUp.filepath);
    alert('Product Analysis Complete\n\n Thank you');
    return;
  }

  counter++;
  console.log('Counter:', counter);

  checkNums();
  console.log('My Newest Set of Numbers:', myNumbers);

  one.setAttribute('src', images[myNumbers[0]].filepath);
  console.log(one);
  two.setAttribute('src', images[myNumbers[1]].filepath);
  console.log(two);
  three.setAttribute('src', images[myNumbers[2]].filepath);
  console.log(three);

  //This accrues the number of times a specific image was shown
  images[myNumbers[0]].numberOfTimesShown++;
  images[myNumbers[1]].numberOfTimesShown++;
  images[myNumbers[2]].numberOfTimesShown++;

  //This function will track of how many times the user clicked a specific image
  for (var i = 0 ; i < images.length ; i++) {
    var source = e.target.getAttribute('src');
    if (source === images[i].filepath) {
      images[i].totalClicks++;
      console.log('Total Clicks:', images[i].totalClicks);
    }
  }
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'],
    datasets: [{
      label: 'Vote Totals',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: images,
    }]
  },

  // Configuration options go here
  options: {}
});
