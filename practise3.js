// task 1

// for (var i = 1; i <= 39; i++) {
//     console.log(i);
//     console.log('ajke amar mon valo ney');

    
// }

// task 2
// for(var i = 58; i <= 98; i++){
//     console.log(i);
// }
// task 3
// for (let i = 412; i <= 456; i+=2) {
//     console.log(i);
    
// }
// task 4
// for (let i = 581; i <= 623; i+=2) {
//     console.log(i);
    
// }
// task 5
// while loop
// var i = 1;
// while( i<= 10){
//     console.log(i);
//     console.log('apple khabo');
//     i++
// }

// for(var i = 1; i <= 10; i++){
//     console.log(i);
//     console.log('gaza daw ');
// }

// task 6

// var learned = ['html', 'css', 'tailwind', 'dasiy sawri', 'bootstrap','java'];

// console.log(learned);

// task 7 

// var phoneName = ['ipon','nokla','sawomi','samsung','moltrla','sympony','realme'];
// var i = 0;

// while (i < phoneName.length) {
    
//     console.log(phoneName[i]);
//     i++;

// }

// for(var i = 0; i< phoneName.length; i++){
//     var element = phoneName[i];
//     console.log(element);
// }

// task 8

// for( i = 30; i <= 86; i++){
//     if(i > 35){
//         break;
//     }
//     console.log(i);
// }

// task 9
// var bookPrice = [50,60,10,150,100,199,199.99,201,200, 220,290,250 ];


// for(var i = 0; i <bookPrice.length; i++){
    
//     var element = bookPrice[i];

//     if(element > 200){
//         break;
//     }

//     console.log(element);
// }

// task 10
// var x = 80000;
// if( x > 80000){
//     console.log('i will bye gaming laptop');
// }
// else if(x > 60000){
//     console.log('i will lenevo laptop');
// }
// else if( x > 40000){
//     console.log('i will used laptop');
// }
// else{
//     console.log('i will buy mobile');
// }

var money = 80000;
var gaming= 80000;
var lenovo = 60000;
var used   = 20000;

if(gaming <= money){
    console.log('i will buy gaming laptop');
}
else if(lenovo < money){
    console.log('i will buy lenovo');
}
else if(used < money){
    console.log('i will buy used laptop');
}
else{
    console.log('toy mobile nie barit ja foot');
}