function createMyObject(){
	return {
		foo: 'bar',
		answerToUniverse: 42,
		'olly olly': 'oxen free',
		sayHello: function(){
			return "hello";
		}	
	};
}

let newObj = createMyObject();
console.log(newObj.sayHello());