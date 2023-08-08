function isValidPhotoName(photoName, imageExtention){
    if(typeof photoName !== 'string' || !Array.isArray(imageExtention)){
        return 'please provide me a valid string'
    }
    else{
        for(let i = 0; i < imageExtention.length; i++){
            const element = imageExtention[i]; 
            if(photoName+element.endsWith(element.length)){
                return true;                
            } 
                   
        }
       return false;
    }
}   

const imageName = 'iamge';
const extention = ['.jpg','.jpeg','.png','.ico'];

const isImageExtention = isValidPhotoName(imageName, extention);
console.log(isImageExtention);

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
