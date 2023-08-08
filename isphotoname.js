function isValidPhotoName(photoName, imageExtention){
    if(typeof photoName !== 'string' || !Array.isArray(imageExtention)){
        return 'please provide me a valid string'
    }
    else{
        for(let i = 0; i < imageExtention.length; i++){
            const element = imageExtention[i]; 
            if(photoName.endsWith(element.length)){
                return true;                
            } 
            else{
                return false;
            }        
        }
       
    }
}   

const imageName = 'iamge';
const extention = ['.jpg','.jpeg','.png','.ico'];

const isImageExtention = isValidPhotoName(imageName, extention);
console.log(isImageExtention);