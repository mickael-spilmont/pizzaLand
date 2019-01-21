const nom = 'Regina';
let html = 'images/' + nom.toLowerCase() + '.jpg';
html = `<a href="${html}">${html}</a>`;

console.log(html);

document.querySelector(".pizzasContainer").innerHTML = html;
