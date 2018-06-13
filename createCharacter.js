

let params = ['name', 'nickname', 'race', 'origin', 'attack', 'defense'];
function createCharacter(name, nickname, race, origin, attack, defense){
	let that = {};

	that.name = name;
	that.nickName = nickname;
	that.race = race;
	that.origin = origin;
	that.attack = attack;
	that.defense = defense;
	that.describe = function(){
		`${this.name} is a ${this.race} from ${this.origin}`;
	}
	that.evaluateFight = function(character){
		const x = character.defense > this.attack ? 0 : this.attack - character.defense;
		const y = this.defense > character.attack ? 0 : character.attack - this.defense;
		return "Your opponent takes {x} damage and you receive {y} damage";
	}
	return that;
}
	let characters = [];
	characters.push(createCharacter("Galdalf the White", "gandalf", "Wizard", "Middle Eart", 10, 6));
	characters.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1));
	characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2));
	characters.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain'));
	characters.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5));
	characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 6, 5));

	let found = characters.find(function(character){
		return character.nickName === 'aragorn';
	});
	console.log(found);
