// import de la méthode pour la lecture de fichier avec promesse
import {readFile} from 'node:fs/promises'
// méthode qui converti l'URL et ne prend que le chemin
import {fileURLToPath} from 'node:url'
// 'dirname' permet d'obtenir le dossier qui correspond à un chemin
// 'join' permet de rejoindre plusieurs chemins ensemble
import {dirname, join} from 'node:path'


// On récupère le chemin relatif du fichier à atteindre

const dir = dirname(fileURLToPath(import.meta.url))
const filename = join(dir, 'demo-deep.txt')

console.log(await readFile(filename, {encoding: 'utf-8'}))