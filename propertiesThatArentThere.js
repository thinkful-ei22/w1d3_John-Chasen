let person1 = {
    name: 'Chasen' ,
    title: 'Student',
    boss: 'Jesse'
};
let person2 = {
    name:  'Johnny',
    title: "Engineer",
    boss: "Jesse"
}
let person3 = {
    name: 'Jesse' ,
    title: 'Boss'
}

let people = [person1,person2,person3];

function print(arr){
    arr.forEach(x => 
    	console.log(x.title === 'Boss' ? `${x.title} ${x.name} doesn't report to anybody.` : `${x.name} reports to ${x.boss}`)
    )
}
print(people);

    
