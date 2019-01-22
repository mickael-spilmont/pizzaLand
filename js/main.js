const data = [{
  nom: 'Regina',
  base: 'tomate',
  ingredients: [
    {id: 1, nom: 'jambon'},
    {id: 2, nom: 'champignons'},
    {id: 3, nom: 'fromage'}
  ]},
  {
  nom: 'Napolitaine',
  base: 'tomate',
  ingredients: [
    {id: 1, nom: 'mozzarella'},
    {id: 2, nom: 'origan'},
    {id: 3, nom: 'basilic'}
  ]},
  {
  nom: 'Spicy',
  base: 'tomate',
  ingredients: [
    {id: 1, nom: 'piment'},
    {id: 2, nom: 'oignon'},
    {id: 3, nom: 'boeuf'}
  ]},
];

let html = '';

function createList(pizza) {
  let str = '';
  pizza.ingredients.forEach(function(ingredient) {
    str += `<li>${ingredient.nom}</li>`;
  });
  return str;
}

data.forEach(function(element) {
  html += `<a href="images/${element.nom.toLowerCase()}.jpg">
              <img src="images/${element.nom.toLowerCase()}.jpg"/>
              <h4>${element.nom}</h4>
              <ul>
                ${createList(element)}
              </ul>
            </a>`;
});

console.log(html);
document.querySelector(".pizzasContainer").innerHTML = html;
