let words = 'craft block argon meter bells brown croon droop';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

let wordArray = words.split(' ');
console.log(wordArray); /// prints array of each word in a string ///

let decodedArray = wordArray.map(word => {
    if(cipher[word[0]]){
        return word[cipher[word[0]-1]];
    }else{
        ' ';
    }
})


console.log(decodedArray);