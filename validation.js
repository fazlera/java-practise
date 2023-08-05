function add(a, b){
    if(typeof a !=='number' || typeof b !== 'number'){
        return 'please give to the number '
    }
    return a+b;
}
console.log(add(3,4));