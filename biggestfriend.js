function add(biggestFriend){

    let biggest = biggestFriend[0];
    for(let i = 1; i < biggestFriend.length; i++){
        let index = biggestFriend[i];
        if(index.length > biggest.length){
            biggest = index;
        }
    }
    return biggest;
}

const friendName = ['apple','komla','kathal','dav','piara','anggur'];

const myFriend = add(friendName);

console.log(myFriend);