// let person = {
//     name:'apple khan',
//     phn: 1254698,
//     id:  365478,
//     add: 'rajshahi',
//     Gen: 'mal'
// }

// find spacific valu of an object
// this is dot notation
// console.log(person.add); 
// this is bracket notation  
// console.log(person['name']);
// this is variable notation
// let x = 'id';
// console.log(person[x]);

// let keys = Object.keys(person);
// console.log(keys);

// let value = Object.values(person);
// console.log(value);

// for (const key of keys) {
//     console.log(person[key]);
// }

// for in loop

let person = {
    name:'apple khan',
    phn: 1254698,
    id:  365478,
    add: 'rajshahi',
    Gen: 'mal'
}

for (const i in person){
        const element = person[i];
        console.log(i);
        console.log(element);
        
    }
