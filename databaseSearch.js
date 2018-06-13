const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];
//arr = hero
//query = key-value pair
function findOne(arr, query){
	arr.forEach(hero =>
		console.log(hero.includes(query))
	)
}
findOne(HEROES, { id: 1 });
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

  
// const expectedKeys = ['id', 'name', 'age', 'city'];
    
//   function validateKeys(object, expectedKeys) {
//     const objectKeys = Object.keys(object);
//     const includes = function(key){
//       return objectKeys.includes(key);
//     }
//     return objectKeys.length === expectedKeys.length ? expectedKeys.every(includes) : false
//   } 


// console.log(validateKeys(objectB, expectedKeys));  
    
