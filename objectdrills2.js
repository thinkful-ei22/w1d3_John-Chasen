let myObject = {
  foo:3,
  bar:'shootah',
  fum:'shake',
  quux:1,
  spam:'10'
};

for (let key in myObject){
   console.log(`${key} : ${myObject[key]}`);
}