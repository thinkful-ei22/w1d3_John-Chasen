'use strict';
const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
console.log(findById(data, 2)); // returns {id: 2, foo: 'bizz'}

function findById(items, idNum){
  return items[idNum-1];
}


