// function sortMaker(arr) {
//     if(!Array.isArray(arr)){
//         return "Invalid Input"
//     }
//         let firstElement = arr[0];
//         let secondElement = arr[1];

//         if(typeof firstElement !== 'number' || typeof secondElement !== 'number' || firstElement < 0 || secondElement < 0){
//             return "Invalid Input"
//         }

//         if (firstElement > secondElement) {
//             return [firstElement, secondElement];
//         }else if(firstElement === secondElement){
//             return "equal"
//         }
//         else {
//             return [secondElement, firstElement];
//         }
//     }


// console.log(sortMaker([2,3]));
// console.log(sortMaker([4,2]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([1,2]));
// console.log(sortMaker([4,-2]));


function canPay(changeArray, totalDue) {

    if(!Array.isArray(changeArray)|| changeArray.length === 0 || typeof totalDue !== 'number' ){
        return 'Please Provide Me With A Valid Array & Number!!!'
    }
    else{
        let arrayTotal = 0;

        for(let item of changeArray){
            if(typeof item !== 'number'){
                return 'Please Provide Me With A Valid Array Number!!!'
            }
            arrayTotal =  item + arrayTotal;
        }

        if(arrayTotal >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }

}
console.log(canPay([1,5,5],10));  
console.log(canPay([1,5,5],10)); 