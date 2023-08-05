

function add(num1 , num2 , num3){

    if(num1 < num2 && num1 < num3){

        return num1;
    }else if(num2 < num1 && num2 < num3){
        return num2;
    }else{
        return num3;
    }

}
const  jim  = 84;
const dela  = 2;
const chinku= -97;

const minTotal = add(jim,dela,chinku);
console.log(minTotal);