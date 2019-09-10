'use strict';
// hvor mange terninger og hvor mange sider , den starter altid ved 0
var arrPlay = [0, 0, 0, 0, 0, 0, 0];
let flip;

function play(a) {
    return Math.floor(Math.random()*a+1);
}

// her bliver der defineret hvor mange sider terningen har
flip = play(6);

if (flip === 1){
    arrPlay[1]++;
} else if (flip === 2){
    arrPlay[2]++;
} else if (flip === 3){
    arrPlay[3]++;
} else if (flip === 4){
    arrPlay[4]++;
} else if (flip === 5){
    arrPlay[5]++;
} else {
    arrPlay[6]++;
};

flip = play(6);

if (flip === 1){
    arrPlay[1]++;
} else if (flip === 2){
    arrPlay[2]++;
} else if (flip === 3){
    arrPlay[3]++;
} else if (flip === 4){
    arrPlay[4]++;
} else if (flip === 5){
    arrPlay[5]++;
} else {
    arrPlay[6]++;
};

flip = play(6);

if (flip === 1){
    arrPlay[1]++;
} else if (flip === 2){
    arrPlay[2]++;
} else if (flip === 3){
    arrPlay[3]++;
} else if (flip === 4){
    arrPlay[4]++;
} else if (flip === 5){
    arrPlay[5]++;
} else {
    arrPlay[6]++;
};

flip = play(6);

if (flip === 1){
    arrPlay[1]++;
} else if (flip === 2){
    arrPlay[2]++;
} else if (flip === 3){
    arrPlay[3]++;
} else if (flip === 4){
    arrPlay[4]++;
} else if (flip === 5){
    arrPlay[5]++;
} else {
    arrPlay[6]++;
};

flip = play(6);

if (flip === 1){
    arrPlay[1]++;
} else if (flip === 2){
    arrPlay[2]++;
} else if (flip === 3){
    arrPlay[3]++;
} else if (flip === 4){
    arrPlay[4]++;
} else if (flip === 5){
    arrPlay[5]++;
} else {
    arrPlay[6]++;
};

flip = play(6);

if (flip === 1){
    arrPlay[1]++;
} else if (flip === 2){
    arrPlay[2]++;
} else if (flip === 3){
    arrPlay[3]++;
} else if (flip === 4){
    arrPlay[4]++;
} else if (flip === 5){
    arrPlay[5]++;
} else {
    arrPlay[6]++;
};
console.log(arrPlay);


arrPlay = [2, 2, 2, 2, 2, 2];

function sides(i) {
    return sides === arrPlay[0];
  }
  
  console.log(arrPlay.every(sides));


var even = function(n) {

  return n % 2 === 0;
};

console.log(arrPlay.some(even));