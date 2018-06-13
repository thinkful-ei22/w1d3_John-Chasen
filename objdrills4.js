let person1 = {
    name: 'Chasen' ,
    jobTitle: 'Student'
};
let person2 = {
    name:  'Johnny',
    jobTitle: "Engineer"
}
let person3 = {
    name: 'Jesse' ,
    jobTitle: "Teacher"
}

let people = [person1,person2,person3];

function print(arr){
    arr.forEach(x => console.log(`${x.name} is a ${x.jobTitle}` ))
}

print(people);