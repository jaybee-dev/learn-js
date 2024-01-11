import {watch} from 'node:fs/promises'

const watcher = watch('./')
// for await permet de boucler sur un intérateur de promesses et d'attendre le résultat de la promesse à chaque fois
for await (const event of watcher) {
    console.log(event)
}

// Penser à faire un Ctrl + C dans la console pour couper l'observation