for (let i = 0; i < 5; i++) {
    console.log("labas");

}
console.log("rytas");

for (let i = 0; i < 5; i++) {
    console.log("i = " + i);
}
//                  0 1 2 3 4 
let IgnoPazymiai = [4, 3, 5, 3, 10];
console.log(IgnoPazymiai[2]);
console.log(IgnoPazymiai);
IgnoPazymiai[1] = 10;
IgnoPazymiai[3] = 8;
console.log(IgnoPazymiai);
console.log("----------------------------");
console.log(IgnoPazymiai.length);

for (let i = 0; i < IgnoPazymiai.length; i++) {
    console.log(IgnoPazymiai[i]);
}

let cars = ["Audi", "Volga", "Peugeot", "Honda", "Maz", "Gaz"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let i = 0; i < cars.length; i++) {
    console.log("cars[" + i + "]");
}

let text = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";

let wordsArray = text.split(" ");
console.log(wordsArray);
let count = 0;
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length <= 5) {
        count++;
    }
}
console.log(count);
console.log("----------------------------");

for (let i = wordsArray.length - 1; i >= 0; i--) {
    console.log(wordsArray[i]);
}

let i = 0;
for (; i < 5; i++) {
    console.log(i);
}
console.log("----------------------------");

i = 0;
for (; i < 5;) {
    i++;
    console.log(i);
}
console.log("----------------------------");

for (let i = 0; i < 100; i += 15) {
    console.log("i = " + i);
}
console.log("----------------------------");

i = 0;
for (; i < 5;) {
    i += 2;
    console.log(i);
}
console.log("----------------------------");

for (let i = 0; i < 100; i++) {
    console.log(i);
    if (i >= 50) {
        break;
    }
}
console.log("----------------------------");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

console.log("----------------------------");

i = 0;
for (; true;) {
    i++;
    console.log(i);
    if (i >= 10) {
        break;
    }
}

console.log("----------------------------");

while (true) {
    let dice = 1 + Math.round(Math.random() * 5);
    console.log(dice);
    if (dice == 6) {
        break;
    }
}

console.log("----------------------------");
let shoudGo = true;
while (shoudGo) {
    let dice = 1 + Math.round(Math.random() * 5);
    if (dice == 6) {
        shoudGo = false;
    }
    console.log(dice);
}


console.log("----------------------------");

do{
    let dice = 1 + Math.round(Math.random() * 5);
    console.log(dice);
    if (dice == 6) {
        break;
    }
}while (false);
