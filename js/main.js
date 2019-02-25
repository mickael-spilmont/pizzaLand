const data = [
	{
		nom: 'Regina',
		base: 'tomate',
		prix_petite: 5.5,
		prix_grande: 7.5
	},
	{
		nom: 'Napolitaine',
		base: 'tomate',
		prix_petite: 6.2,
		prix_grande: 8
	},
	{
		nom: 'Spicy',
		base: 'crème',
		prix_petite: 6.5,
		prix_grande: 9.95
	},
];

class Animal {
	name;
	constructor(name) {
		this.name = name
	}
	fly() {
		console.log(`${this.name} is flying !`);
	}
}

const threeEyedRaven = new Animal('Bran');
threeEyedRaven.fly();
