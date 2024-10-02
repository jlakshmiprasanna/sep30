// question-1(for)
for(var number=1;number<=10;number++){
    console.log(number);
}

// Question-1(while)
var a=1;
while(a<=1){
    console.log(a);
    a++
}

// Question-1(do-while)
var a = 1;
do {
  console.log(a);
  a++;
} while (a <= 10);


// question-2
for(var even=2;even<=20;even+=2){
    console.log(even);
}

// Question-2(while)
var even = 2;
while (even <= 20) {
  console.log(even);
  even += 2;
}

// Question-2(do-while)
var even = 2;
do {
  console.log(even);
  even += 2;
} while (even <= 20);


// question-3
for(var odd=1;odd<=20;odd+=2){
    console.log(odd);
}

// Question-3(while)
var odd=2
while(odd<=20){
    console.log(odd);
odd+=2;
}

// Question-3(do-while)
var odd = 1;
do {
  console.log(odd);
  odd += 2;
} while (odd <= 20);


// question-4(for)
var D=65;
if(D<=35&D<=45){
    console.log("pass")
}
else if(D<=55&D<=65){
    console.log("improve your self")
}
else if(D<=75&D<=85){
    console.log("Good")
}
else if(D<=85&D<=95){
    console.log("Great")
}
else{
    console.log(pass);
}

// Question-4(while)
var D = 40; 
while (D >= 35 && D <= 45) {
  console.log("Grade: D");
  break; 
}
if (D < 35 || D > 45) {
  console.log("fail");
}

// Question-4(do-while)
var D=40;

do {
    number = parseInt(prompt("Please enter a number greater than 10:"));
} while (D<= 10);

console.log("You entered: " + D);
