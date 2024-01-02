// https://jsdoc.app

/*

Les commentaires doivent expliquer le rôle des fonctions, classes, propriétés.
Il ne faut pas avoir des commentiares qui ré-expliquent le code ; 
ce dernier se documente par nature en fonction des noms donnés aux variables, aux fonctions et aux classes.
On pourra utiliser la JSDoc ( https://jsdoc.app ) pour avoir plus de précisions sur les types attendus au niveau des paramètres,
de fonctions ou des types de retours

*/

/**
 * Description si besoin
 * 
 * d'autre choses etc...
 * 
 * @param {number} age 
 * @param {string} country Code pays sur 2 caractères
 * @returns {boolean}
 */
function canDrive (age, country) {
    if (age => 18) {
        return true
    } else if (country === 'US' && age >= 18) {
        return true
    }
    return false
}

const a = canDrive(18, 'FR')




// Définir un type

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title Titre de l'article
 * @property {string} body
 */

/**
 * @return {Promise<Post[]>}
 */
function fetchPosts () {
    
}

const p = fetchPosts().then((posts) => {
    const post = posts[0]
    post.title
    post.id
})

//////////////////////////


class A {

    constructor () {
        /**
         * Prénom de l'utilisateur
         * @type {string}
         */
        this.firstname
    }

}

const b = new A();
b.firstname // <- survol du pointeur sur 'firstname'

/** @type {string[]} */
const array = []