const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };

const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    const objectKeys = Object.keys(object);
    const includes = function(key){
      return objectKeys.includes(key);
    }
    return objectKeys.length === expectedKeys.length ? expectedKeys.every(includes) : false
  } 


  
    
console.log(validateKeys(objectB, expectedKeys));