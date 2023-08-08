// function isValidPhotoName(photoName, imageExtention){
//     if(typeof photoName !== 'string' || !Array.isArray(imageExtention)){
//         return 'please provide me a valid string'
//     }
//     else{
//         for(let i = 0; i < imageExtention.length; i++){
//             const element = imageExtention[i]; 
//             if(photoName+element.endsWith(element.length)){
//                 return true;                
//             } 
                   
//         }
//        return false;
//     }
// }   

// const imageName = 'iamge';
// const extention = ['.jpg','.jpeg','.png','.ico'];

// const isImageExtention = isValidPhotoName(imageName, extention);
// console.log(isImageExtention);

// function isValidPhotoName(photoName, imageExtensions) {
//     if (typeof photoName !== 'string' || !Array.isArray(imageExtensions)) {
//         return 'Please provide a valid photo name and image extensions array.';
//     } else {
//         for (let i = 0; i < imageExtensions.length; i++) {
//             const extension = imageExtensions[i];
//             if (photoName+extension.endsWith(extension)) {
//                 return true;
//             }
//         }
//         return false; // Moved the return statement outside of the loop
//     }
// }

// const imageName = 'image'; // Fixed typo: 'iamge' to 'image'
// const extensions = ['.jpg', '.jpeg', '.png', '.ico']; // Renamed 'extention' to 'extensions'

// const isImageExtension = isValidPhotoName(imageName, extensions);
// console.log(isImageExtension);



// function cube(number){

//     let result = Math.pow(number,3);
//     return result;
// }
// console.log(cube(3));
// console.log(cube(4));

// function matchFinder(string1, string2){

    // let match1 = string1;
    // let match2 = string2;

//     if(string1.includes('Code') === string2.includes("Code")){
//         return true
//     }
//     return false;
    
// }
// const myString = matchFinder('Javasript','Code');
// console.log(myString);

function sortMaker(arr){
    for(let item of arr)

}
console.log(sortMaker([2,3]));

