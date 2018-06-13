function personMaker() {
	var person = {
    firstName: 'Paul',
    lastName: 'Jones',
 	fullName: function(){
		return `${this.firstName} ${this.lastName}`;
	}
	}
	return person;
}

let Joe = personMaker();
console.log(Joe.fullName());