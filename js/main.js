// const nom = 'Regina';
// let html = 'images/' + nom.toLowerCase() + '.jpg';
// html = `<a href="${html}">
//   <img src="${html}"/>
//   <h4>Regina</h4>
// </a>`;
//
// console.log(html);
//
// document.querySelector(".pizzasContainer").innerHTML = html;

const noms = ['Regina', 'Napolitaine', 'Spicy'];
const liens = [];
let html = '';

for (let i = 0 ; i < noms.length ; i++) {
  html += `<a href="images/${noms[i].toLowerCase()}.jpg"
              <img src="images/${noms[i].toLowerCase()}.jpg"/>
              <h4>${noms[i]}</h4>
            </a>`;
}
document.querySelector(".pizzasContainer").innerHTML = html;
