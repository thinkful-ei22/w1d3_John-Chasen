let words = 'craft block argon meter bells brown croon droop';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

let wordArray = words.split(' ');

let decodedArray = wordArray.map(word => {
	let index = cipher[word[0]] - 1;
    if(cipher[word[0]]){
    	return word[index];
        //return word[cipher][word][0]-1;
    }else{
        return ' ';
    }
});

console.log(decodedArray.join(''));