console.log('Chargement de "app.js" terminé')

// sélection d'un élement
console.log(document.querySelector('#hello'))

// sélection une liste d'élements (ici tous les 'li')
console.log(document.querySelectorAll('li'))

// on peut placer dans un tableau...
const lis = document.querySelectorAll('li')
// ...afin d'accéder à l'élement souhaité de ce tableau
console.log(lis[2])

// fonction de parcours
lis.forEach(v => console.log(v))

// n'étant toutefois pas prototypé comme un tableau classique,
// il faudra avant utiliser la méthode 'Array.from(tableau)' afin d'utiliser d'autres méthode comme par exemple 'filter'
console.log(Array.from(lis))

// d'autres méthodes désormais de moins en moins utilisées sont disponibles, mais pour des cas particuliers
// autant utiliser celle ci-dessus
document.getElementById('hello')
document.getElementsByClassName('hello')

const ul = document.querySelector('ul li:first-child')
console.log(
    ul.nodeName, // récupère le nom du noeud HTML sur lequel on est
    ul.innerHTML, // récupère la structure HTML à l'intérieur
    ul.innerText, // récupère le texte en retirant les espaces et autres élements lisibles par l'utilisateur
    ul.textContent, // récupère toue le contenu même invisible en respectant les espaces
)

// ajouter un attribut ; paramètres => ('attribut_ciblé', 'nouvel_attribut')
ul.setAttribute('hidden', 'hidden')
// supprimer un attribut
ul.removeAttribute('hidden')
// récupère la classe d'un élement HTML
console.log(
    ul.getAttribute('class')
)
// agir sur les classes
console.log(
    ul.classList.remove('red'), // supprime la classe spécifiée
    ul.classList.add('cyan'), // ajout la classe spécifiée (si la classe existe déjà, il ne va pas en rajouter à la suite)
)