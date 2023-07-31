// var fruit = ['apple', 'banana', 'orange'];
// var position = fruit.indexOf('banana');
// fruit[1] = 'mango';
// var remove = fruit.pop();
// fruit.push('watermelon');
// fruit.shift()
// fruit.unshift('gaza');

// console.log(fruit,position,remove);

// var friendsName = ['Gaza', 'Tom','jane', 'peter', 'jons'];
// var friendsNumber = [85, 66, 95, 56, 40]

var gaza = 39;
var tom  = 66;
var jane = 95;
var peter= 56;
var jons = 40;

// Gaza Result

if  (gaza >=80){
    console.log('Gaza A Grade');

}
else if(gaza >=60){
    console.log('Gaza B Grade');
}
else if(gaza >=50){
    console.log('Gaza c Grade');
}
else if(gaza >=40){
    console.log('Gaza D Grade');
}
// else if(gaza <=39){
//     console.log('Gaza F Grade');
// }

else{
    console.log('F Grade you are fail');
}
// Tom resulte

if  (tom >=80){
    console.log('tom A Grade');

}
else if(tom >=60){
    console.log('tom B Grade');
}
else if(tom>=50){
    console.log('tom c  Grade');
}
else if(tom>=40){
    console.log('tom D Grade');
}
else if(tom <40){
    console.log('tom F Grade');
}

else{
    console.log('you are fail');
}


// 3rd

var num1 = 9;
var num2 = 8;
var num3 = 9;

if (num1 == num2){
    console.log('num1 and num2 matched');
}
else if (num2 == num3){
    console.log('num2 and num3 matched');
}
else if (num1 == num3){
    console.log('num1 and num3 matched');
}
else {
    console.log('not mathced');
}

var sum1 = 13;
var sum2 = 79;
var sum3 = 45;

if(sum1 >= 79){
    console.log("sum1");
}
else if(sum2 >= 79){
    console.log('sum2');
}
else if(sum3 >= 79){
    console.log('sum3');
}
else{
    console.log('dose not matched');
}

var sum1 = 13;
var sum2 = 79;
var sum3 = 45;
var largestNumber;

if (sum1 >= sum2 && sum1 >= sum3) {
    console.log('largestNumber = sum1;');
}

 else if (sum2 >= sum1 && sum2 >= sum3) {
    console.log( largestNumber = sum2);
}
else if(sum3 >= sum1 && sum3 >= sum2){
    console.log('largestNumber = sum3;');
}

else {
    largestNumber = sum3;
}

var marks = [13, 15, 14, 20, 18];

for (var i = 0; i < marks.length; i++) {
  if (marks[i] >= 15) {
    continue;
  }
  console.log(marks[i]);
}

var name = "false";



