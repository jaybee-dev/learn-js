// créer une fonction qui liste les fichier dans le répertoire, de façon non récursive
// pour chaque fichier, on mettra d'abord un signe puor dire si c'est un fichier ou un dossier
// f dans le cadre d'un fichier, et d pour un dossier
// ensuite on mettra le nom du fichier ainsi que le poids en octets
// utiliser la méthode reeadDir

/* Exemple attendu :
F - app.js - 32ko
D - demo
*/

import { stat, readdir } from 'node:fs/promises';

/* Mon code fonctionnel
const files = await readdir('./', {withFileTypes: true})

for (const file of files) {
    if (file.isDirectory()) {
        console.log('D -', file.name)
    } else if (file.isFile()) {
        const {size} = await stat(file.name)
        console.log('F -', file.name, '-', size,'o')
    }
}
*/

// Code proposé Grafikart

const files = await readdir('./', {withFileTypes: true})

await Promise.allSettled(
    files.map(async (file) => {
        const parts = [
            file.isDirectory() ? 'D' : 'F',
            file.name
        ]
        if (!file.isDirectory()) {
            const {size} = await stat(file.name)
            parts.push(`${size}o`)
        }
        console.log(parts.join( ' - ' ))
    })
)    
