const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    let sortedObject = Object.keys(object);
    sortedObject.forEach(key => 
      sortedObject.includes(key) ? true : false
    );
  } 
  
    
console.log(validateKeys(objectA, expectedKeys));