function sortMaker(arr){

    for(let i = 0; i < arr.length; i++){
      let x = arr[0];
      let y = arr[1];
      
      if(x < y){
        return x===y && y===x
      }

      
    }
     return arr; 
  }
  const arrNumber = [2,3]
  const number = sortMaker(arrNumber)