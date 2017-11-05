'use strict';

var btn = document.getElementById('btn');
var input = document.getElementById('item');
var tasks = document.getElementById('tasks');

if (localStorage.list) {
  var list = localStorage.list.split(',');
} else {
  var list = [];
}

function save() {
  list.push(input.value);
  localStorage.list = list;
  console.log('list array:', list);
  console.log('local storage version', localStorage.list);
}

function create() {
  var val = input.value;
  var item = document.createElement('li');
  item.appendChild(document.createTextNode(val));
  tasks.appendChild(item);
  input.value = '';
}

function load() {
  if (localStorage.list) {
    var item;
    for (var x = 0; x < list.length; x++) {
      item = document.createElement('li');
      item.appendChild(document.createTextNode(list[x]));
      tasks.appendChild(item);
    }
  }
}

function render() {
  save();
  create();
}

load();

btn.addEventListener('click', render);
