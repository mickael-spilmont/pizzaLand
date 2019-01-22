const noms = ['Regina', 'Napolitaine', 'Spicy'];
const liens = [];
let html = '';

/*
// Méthode avec map + join
html = noms.map(nom => {
  return `<a href="images/${nom.toLowerCase()}.jpg">
              <img src="images/${nom.toLowerCase()}.jpg"/>
              <h4>${nom}</h4>
            </a>`;
}).join('');
*/

noms.forEach(function(nom) {
  html += `<a href="images/${nom.toLowerCase()}.jpg">
              <img src="images/${nom.toLowerCase()}.jpg"/>
              <h4>${nom}</h4>
            </a>`;
});

document.querySelector(".pizzasContainer").innerHTML = html;
