function objSentance(sentance){
    if(typeof sentance  !== 'object'){
        return ' please provide me an object'
    }
    else{
        const brand = sentance.brand || 'nai'
        const price = sentance.price || 'nai'
        const camera = sentance.camera || 'nai'
        const storage = sentance.storage || '___,___'

        const myString = 'amar phner brand '+brand + '. amar phner price '+price + '. amar phoner camera '+camera + '. amar phoner storage '+ storage + '.';

        return myString;
    }
}


const smartPhone = {
    brand: 'samsung',
    price: 21000,
    camera: '1000mxp',
    storage: ''
}
const totalSentance = objSentance(smartPhone);
console.log(totalSentance);