'use strict';

//Event Listener
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

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

//Thumbs Up Object Literal. I use this image at the end of the application.
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

//Generates a new set of numbers that aren't repeated from the previous set of numbers.
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

//This produces my first three images
randomNums();
console.log('Initial Three Numbers:', myNumbers);

one.setAttribute('src', images[myNumbers[0]].filepath);
two.setAttribute('src', images[myNumbers[1]].filepath);
three.setAttribute('src', images[myNumbers[2]].filepath);

//Event Listener Function
var counter = 0;

function listen(e) {
  if (counter === 25) {
    one.setAttribute('src', '');
    two.setAttribute('src', thumbsUp.filepath);
    three.setAttribute('src', '');
    alert('Product Analysis Complete\n\n Scroll Down for Results');
    results();
    displayChart();
    return;
  }

  counter++;

  checkNums();
  console.log('My Newest Set of Numbers:', myNumbers);

  one.setAttribute('src', images[myNumbers[0]].filepath);
  two.setAttribute('src', images[myNumbers[1]].filepath);
  three.setAttribute('src', images[myNumbers[2]].filepath);

  //This accrues the number of times a specific image was shown
  images[myNumbers[0]].numberOfTimesShown++;
  images[myNumbers[1]].numberOfTimesShown++;
  images[myNumbers[2]].numberOfTimesShown++;

  //This for loop will track of how many times the user clicked a specific image
  for (var i = 0 ; i < images.length ; i++) {
    var source = e.target.getAttribute('src');
    if (source === images[i].filepath) {
      images[i].totalClicks++;
      console.log('Voted:', images[i].totalClicks, ' out of ', images[i].numberOfTimesShown, ' times shown.');
      console.log('Counter:', counter);
    }
  }
}

//A function to create an array of votes and an array of how many times pictures were shown
var names = [];
var votes = [];
var shown = [];

function results(){
  for(var i = 0 ; i < images.length ; i++){
    names.push(images[i].name);
    votes.push(images[i].totalClicks);
    shown.push(images[i].numberOfTimesShown);
  }
}

//Creating my Chart
function displayChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Vote Totals',
        data: votes,
        backgroundColor: [
          'rgba(0, 51, 0, 0.4)',
          'rgba(0, 153, 51, 0.4)',
          'rgba(51, 204, 51, 0.4)',
          'rgba(102, 255, 102, 0.4)',
          'rgba(153, 255, 153, 0.4)',
          'rgba(204, 255, 204, 0.4)',
          'rgba(255, 204, 255, 0.4)',
          'rgba(255, 153, 255, 0.4)',
          'rgba(255, 102, 255, 0.4)',
          'rgba(255, 0, 255, 0.4)',
          'rgba(204, 0, 204, 0.4)',
          'rgba(102, 0, 102, 0.4)',
          'rgba(153, 0, 204, 0.4)',
          'rgba(153, 0, 255, 0.4)',
          'rgba(102, 0, 204, 0.4)',
          'rgba(102, 102, 153, 0.4)',
          'rgba(51, 51, 153, 0.4)',
          'rgba(0, 0, 102, 0.4)',
          'rgba(51, 51, 0, 0.4)',
          'rgba(102, 102, 51, 0.4)'
        ],
        borderColor: [
          'rgba(0, 51, 0, 0.4)',
          'rgba(0, 153, 51, 0.4)',
          'rgba(51, 204, 51, 0.4)',
          'rgba(102, 255, 102, 0.4)',
          'rgba(153, 255, 153, 0.4)',
          'rgba(204, 255, 204, 0.4)',
          'rgba(255, 204, 255, 0.4)',
          'rgba(255, 153, 255, 0.4)',
          'rgba(255, 102, 255, 0.4)',
          'rgba(255, 0, 255, 0.4)',
          'rgba(204, 0, 204, 0.4)',
          'rgba(102, 0, 102, 0.4)',
          'rgba(153, 0, 204, 0.4)',
          'rgba(153, 0, 255, 0.4)',
          'rgba(102, 0, 204, 0.4)',
          'rgba(102, 102, 153, 0.4)',
          'rgba(51, 51, 153, 0.4)',
          'rgba(0, 0, 102, 0.4)',
          'rgba(51, 51, 0, 0.4)',
          'rgba(102, 102, 51, 0.4)'
        ],

        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
