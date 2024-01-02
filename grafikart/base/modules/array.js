// rendre disponible à l'export avec le mot clé 'export' précédent le 'const'
export const sum = (items) => items.reduce((acc, item) => acc + item, 0)

// l'exemple ci-dessous démontre qu'il ne sera pas possible de l'appeler car pas de 'export'
const hello = () => console.log('hello')

// on peut exporter tout ce que l'on peut mettre dans une variable, comme une fonction, une classe, etc...

export class Exemple {
    titre = 'Mon titre'
}