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
    let expectedKeysSorted = expectedKeys.sort();
    let ObjectSorted = Object.keys(object).sort();
    let matching = true;

    for( i= 0; i< expectedKeysSorted.length; i++){
        if (expectedKeysSorted[i] !== ObjectSorted[i]){
            matching = false;
        }
    }
    return matching;
}


console.log(validateKeys(objectB, expectedKeys));  
    
    
