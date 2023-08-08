function isPositive(number){
    if(!Array.isArray(number)){
        return 'please provide me positive number of an array Thank you!!! '
    }
    else{
        let allPositiveNumber = [];
        for (const item of number) {
            if(item < 0){
                allPositiveNumber++;
            }
        }return allPositiveNumber;
    }
}

const multiNumber = [45,-87,96,11,92,-49,21,-36,72,59,-36];
const positiveNumber = isPositive(multiNumber);
console.log(positiveNumber);