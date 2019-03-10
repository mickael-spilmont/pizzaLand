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

class Component {
	tag;
	attribute;
	children;
	constructor(tag, attribute, children) {
		this.tag = tag;
		this.attribute = attribute;
		this.children = children;
	}
	render() {
		let str;
		if (this.children) {
			str = `<${this.tag}>
						${this.renderChildren()}
					</${this.tag}>`;
		} else {
			str = `<${this.tag} ${this.renderAttribute()}/>`
		}
		return str;
	}
	renderAttribute() {
		if (this.attribute !== null) {
			return `${this.attribute.name}=\"${this.attribute.value}\"`;
		}
		return null;
	}
	renderChildren() {
		let str = "";
		if (this.children instanceof Array) {
			this.children.forEach(element => {
				if (element instanceof Component) {
					return element.render();
				}
				str += element;
			});
		} else {
			str = this.children;
		}
		return str;
	}
}

// const threeEyedRaven = new Animal('Bran');
// threeEyedRaven.fly();

// const title = new Component('h1', null, ['La', ' ', 'carte']);
// document.querySelector('.pageTitle').innerHTML = title.render();

// const img = new Component('img', {name: 'src', value: 'images/regina.jpg'});
// document.querySelector('.pizzasContainer').innerHTML = img.render();

const c = new Component( 'article', {name:'class', value:'media'}, [new Component('img', null, 'images/regina.jpg'), 'Regina']);
document.querySelector( '.pizzasContainer' ).innerHTML = c.render();
