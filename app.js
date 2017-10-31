'use strict';

//Array of images
var images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

//Constructor Function
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
}

//Instantiated Objects
var bag = new Product('bag', './Image/bag.jpg');
var banana = new Product('banana', './Image/banana.jpg');
var bathroom = new Product('bathroom', './Images/bathoom.jpg');
var boots = new Product('boots', './Images/boots.jpg');
var breakfast = new Product('breakfast', './Images/breakfast.jpg');
var bubblegum = new Product('bubblegum', './Images/bubblegum.jpg');
var chair = new Product('chair', './Images/chair.jpg');
var cthulu = new Product('cthulu', './Images/cthulu.jpg');
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
var wineGlass = new Product('wine-glass', './Images/wine-glass');

//My Ridiculous Random Number Generator
var myNumbers = [];

function randomNums (){
  var randomNumber = Math.floor(Math.random() * images.length);
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

randomNums();
console.log('Initial Three Numbers:', myNumbers);

//These are the values that were shown last
var lastSet = [];

function checkNums(){
  lastSet.push(myNumbers);
  console.log('These numbers were in the last set:', lastSet);
  myNumbers = [];
  console.log('myNumbers array should be empty ready for a new set of numbers:', myNumbers);
  var i = 0;

  while( i < 3 ) {
    randomNumber = Math.floor(Math.random() * images.length);
    while (randomNumber === lastSet[0] || randomNumber === lastSet[1] || randomNumber === lastSet[2] || randomNumber === myNumbers[0] || randomNumber === myNumbers[1]) {
      randomNumber = Math.floor(Math.random() * images.length);
    }
    myNumbers.push(randomNumber);
    console.log('This number should be new and added to myNumbers and be different from what was in the last set:', myNumbers);
    i++;
  }
  lastSet = [];
  console.log('Shown Last should be empty here:', lastSet);
  console.log('My Newest Set of Numbers:', myNumbers);
}

checkNums();


/*
Product.prototype.clicks = function () {}

one.setAttribute('src', images[myNumbers[0]].filepath);
console.log(one);
two.setAttribute('src', images[myNumbers[1]].filepath);
console.log(one);
three.setAttribute('src', images[myNumbers[2]].filepath);
console.log(one);
*/

/*one.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('image src:', src);
  console.log('total cat clicks:', counter);
});

var images = [];

two.addEventListener('click', function() {
  var src = this.getAttribute('src');
  var name = this.getAttribute('id');

  images.push(new Tracker(name, src));
  console.log(images);
});

three.addEventListener('click', function() {
  var src = this.getAttribute('src');
  var name = this.getAttribute('id');

  images.push(new Tracker(name, src));
  console.log(images);
});
*/
