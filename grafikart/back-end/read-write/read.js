// 'npm init -y' dans la console sur le dossier pour créer le package.json
// dans le 'package.json', ajouter une clé "type": "module" permettant à Node de comprendre les imports

//// METHODE READ ////

// import du module
import  {readFile} from 'node:fs/promises'

// readFilsSync() est synchrone, donc le JS sera bloqué tant que la lecture ne sera pas terminée
// const contentSync = fs.readFileSync('text.txt', {encoding: 'utf-8'})

// méthode asynchrone mais peut pratique
/*
const content = fs.readFile('text.txt', {encoding: 'utf-8'}, function (err, content) {
    console.log(content)
})
console.log('hello')
*/

// Méthode utilisant les promesses ; à privilégier
//const content = await readFile('text.txt', {encoding: 'utf-8'})
//console.log(content)

// Avec plusieurs fichiers :
const content = await Promise.all([
    readFile('text.txt', {encoding: 'utf-8'}),
    readFile('read.js', {encoding: 'utf-8'})
])
console.log(content)