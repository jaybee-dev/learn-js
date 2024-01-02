console.log('Chargement de "app.js" terminé')

// sélection d'un élement
console.log('Select one element with "document.querySelector("#hello")"',document.querySelector('#hello'))

// sélection une liste d'élements (ici tous les 'li')
console.log('Select all elements with "document.querySelectorAll("li")"',document.querySelectorAll('li'))

// on peut placer dans un tableau...
const lis = document.querySelectorAll('li')
// ...afin d'accéder à l'élement souhaité de ce tableau
console.log('Select element in array',lis[2])

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
    '# ul.nodeName #',
    ul.nodeName, // récupère le nom du noeud HTML sur lequel on est
    '# ul.innerHTML #',
    ul.innerHTML, // récupère la structure HTML à l'intérieur
    '# ul.innerText #',
    ul.innerText, // récupère le texte en retirant les espaces et autres élements lisibles par l'utilisateur
    '# ul;textContent #',
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

const li = document.querySelector('ul li:first-child')

console.log(
    li.style, // permet de lister les valeurs de l'attribut style de l'élement spécifié
    li.style.color = 'yellow', // assigne une nouvelle valeur 'blue' au style de l'élement li
)

// méthode assez spécifique qui peut être utilisée dans certains cas :
console.log(getComputedStyle(li)) // donne la valeur calculée finale de toutes les propriétés CSS sur un élément 
console.log(getComputedStyle(li).color) // donne la valeur spécifiée (ici 'color') finale de toutes les propriétés CSS sur un élément.

// # Ajouter un élement

const newLi = document.createElement('li') // on créé un nouvel élement 'li'
newLi.innerHTML = "Bonjour les gens ! Je suis une nouvelle li !" // on ajoute du texte
document.querySelector('ul').append(newLi) // on sélectionne l'emplacement, on rajoute un noeud (avec 'appendChild') à la fin de la liste des enfants du noeud parent spécifié

// L'interface HTMLLIElement expose des propriétés et des méthodes spécifiques (en plus de celles définies par l'interface HTMLElement normale dont elle dispose également par héritage) pour manipuler les éléments de la liste.
// > chaine d'héritage ; tout ce qui est avant est accessible directement
// DOC MDN : https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement

// 'appendChild()' ne peut être eutilisé que sur un noeud
// 'append()' ajoute un élement à la toute fin ; ne peut être utilisé que sur un élement [A PRIVILEGIER]
// 'prepend()' ajout un élement au tout début ; ne peut être utilisé que sur un élement

// Une élément ne peut pas être à plusieurs endroits à la fin dans une structure HTML ;
// Il sera retiré et ajouté ailleurs, donc déplacé, si jamais on essaie de le réutiliser ailleurs

const div = document.createElement('div')
div.innerHTML = 'Coucou, je suis une div'
ul.insertAdjacentElement("beforebegin", div)

// 'beforebegin' : Avant targetElement lui-même.
// 'afterbegin' : A l'intérieur de targetElement, avant son premier enfant (comme un prepend)
// 'beforeend' : A l'intérieur de targetElement, après son dernier enfant (comme un append)
// 'afterend' : Après targetElement lui-même.

// # Parcours de enfants et parents

const ulParkour = document.querySelector('ul') // on séléectionne le 1er 'ul'
console.log(
    'ul Parkour',
    ulParkour.querySelector('li'), // on séléction le 1er 'li' ce 'ul' (et donc d'aucun autre 'ul')
    'children:',
    ulParkour.children, // renvoie une liste d'élement (une HTMLCollection)
    'childNodes:',
    ulParkour.childNodes, // renvoie tous les noeuds enfants, même les nom HTML comme les noeuds textuels
    'firstChild:',
    ulParkour.firstChild, // donne le 1er noeud enfant
    'firstElementChild:',
    ulParkour.firstElementChild, // renvoie le 1er noeud qui est un élement HTML
    'childElementCount:',
    ulParkour.childElementCount // renvoi le nombre d'élements à l'intérieur
)

const liParkour = document.querySelector('ul li')
console.log(
    'parentNode:',
    li.parentNode, // renvoie le noeud parent
    'parentElement:',
    li.parentElement, // renvoi l'élement parent
    'nextElementSibling:', //renvoi l'élement qui est juste après
    li.nextElementSibling,
    'nextSibling:', // renvoi le noeud qui est juste après (ici du texte)
    li.nextSibling,
    'previousElementSibling:', //renvoi l'élement qui est juste avant (ou 'null' s'il n'y en a aucun)
    li.previousElementSibling,
    'previousSibling:', // renvoi le noeud qui est juste avant
    li.previousSibling,
    // li.remove => supprime complètement l'élement sélectionné
)

// cloner un élement avec la méthode 'cloneNode', et passer 'true' en paramètre si on souhaite aussi cloner tout les élements enfants de l'élement cloné
ul.append(li.cloneNode(true))
// permet de vérifier la présence d"un élement sous la forme d'un booléen
console.log(ul.contains(li))

