'use strict';

//Array of images
var images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');


one.setAttribute('src','Images/bag.jpg');
console.log(one);


//Constructor Function
function Filepath(name, filepath) {
  this.name = name;
  this.filepath = filepath;
}

//Objects
var bag = new Filepath('bag', 'Image/bag.jpg');
var banana = new Filepath('banana', 'Image/banana.jpg');
var bathroom = new Filepath('bathroom', 'Images/bathoom.jpg');
var boots = new Filepath('boots', 'Images/boots.jpg');
var breakfast = new Filepath('breakfast', 'Images/breakfast.jpg');
var bubblegum = new Filepath('bubblegum', 'Images/bubblegum.jpg');
var chair = new Filepath('chair', 'Images/chair.jpg');
var cthulu = new Filepath('cthulu', 'Images/cthulu.jpg');
var dogDuck = new Filepath('dog-duck', 'Images/dog-duck.jpg');
var dragon = new Filepath('dragon', 'Images/dragon.jpg');
var pen = new Filepath('pen', 'Images/pen.jpg');
var petSweep = new Filepath('pet-sweep', 'Images/pet-sweep.jpg');
var scissors = new Filepath('scissors', 'Images/scissors.jpg');
var shark = new Filepath('shark', 'Images/shark.jpg');
var sweep = new Filepath('sweep', 'Images/sweep.png');
var tauntaun = new Filepath('tauntaun', 'Images/tauntaun.jpg');
var unicorn = new Filepath('unicorn', 'Images/unicorn.jpg');
var usb = new Filepath('usb', 'Images/usb.gif');
var waterCan = new Filepath('water-can', 'Images/water-can.jpg');
var wineGlass = new Filepath('wine-glass', 'Images/wine-glass');

//My Ridiculous Random Number Generator
var previousNumbers = [];
var shownLast = [];

function randomNums (){
  var randomNumber = Math.floor(Math.random() * images.length);
  previousNumbers.push(randomNumber);
  randomNumber = Math.floor(Math.random() * images.length);
  while (randomNumber === previousNumbers[0] || randomNumber === previousNumbers[1] || randomNumber === previousNumbers[2]) {
    randomNumber = Math.floor(Math.random() * images.length);
  }
  previousNumbers.push(randomNumber);
  randomNumber = Math.floor(Math.random() * images.length);
  while (randomNumber === previousNumbers[0] || randomNumber === previousNumbers[1] || randomNumber === previousNumbers[2]) {
    randomNumber = Math.floor(Math.random() * images.length);
  }
  previousNumbers.push(randomNumber);
}

randomNums();

//These are the values that were shown last
function checkNums(){
  shownLast.push(previousNumbers);
  previousNumbers = [];

  for(var i = 0 ; i < 3 ; i++) {
    randomNumber = Math.floor(Math.random() * images.length);
    if (randomNumber !== shownLast[0] || randomNumber !== shownLast[1] || randomNumber !== shownLast[2]) {
      previousNumbers.push(randomNumber);
    }
  }
}
