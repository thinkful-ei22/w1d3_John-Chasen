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
    if (expectedKeys.length !== Object.keys(object).length){
      return false;
    }
    let expectedKeySorted = expectedKeys.sort();
    let ObjectSorted = Object.keys(object).sort();
  } 
  
    
    console.log(Object.keys(object));