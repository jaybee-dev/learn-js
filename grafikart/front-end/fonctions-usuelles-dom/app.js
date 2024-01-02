/////////////////////////////

const div = document.querySelector('div')
console.log(div.dataset.user) // renvoi la valeur de l'attribut 'data-user'

// on peut définir un attribut qui sera ajouté à l'élément sélectionné
div.dataset.hello = 'bonjour'
console.log(div.dataset.hello)

/////////////////////////////

// Supprimer un EventListener
const button = document.querySelector('button')
let i = 0
const listener = () => {
    i++
    console.log(button.dataset.name)
    if (i >= 3) {
        button.removeEventListener('click', listener)
    }
}

button.addEventListener('click', listener)

//////////////////
// METHODES CSS //
//////////////////

// ANIMATIONS

button.animate([
    {
        // from
        transform: 'translateY(0)', // optionnel car il va prendre la position par défaut de l'élément
    },
    {
        // to
        transform: 'translateY(100px)',
    }
], {
    duration: 2000, // la durée de l'animation en ms
    iterations: 2, // le nombre d'intérations ('Infinity' = infini)
    fill: 'both' // reste sur l'animation finale
})

// MEDIA-QUERYS

// taille de la fenêtre (largeur)
console.log('windows.innerWidth:',window.innerWidth)
// taille de la fenêtre (hauteur)
console.log('windows.innerHeight',window.innerHeight)
// écouter le redimensionnement (méthode pas très performante car recalcule à chaque redimensionnement)
/* window.addEventListener('resize', () => {
    console.log(window.innerHeight, window.innerWidth)
}) */

// Méthode beaucoup plus performante à utiliser
const mediaQuery = window.matchMedia('(min-height: 300px)')
mediaQuery.addEventListener('change', () => {
    console.log(mediaQuery.matches) // renvoi un booléen qui sera à 'false' tant que la condition ne sera pas remplie, à savoir 300px de hauteur
})

// IMAGES

const img = document.querySelector('img')
// on ajout un écouteur d'évent qui sera en charge de d'écouter le chargement de l'image ;
// important car en cas de basse connexion, on aura 0 car l'image n'aura pas eu le temps de charger
img.addEventListener('load', () => {
    // penser à régler la vitesse sur un 3G lente par exemple pour voir le résultat dans la console
    console.log('Dimensions image et balise:',img.width, img.height) // dimensions de l'image avec sa balise img
    console.log('Dimensions image tout seule:',img.naturalWidth, img.naturalHeight) // dimension de l'image elle-même
})
