import {open} from 'node:fs/promises'

const file = await open('open.txt', 'a')

file.write('Hellow')


// penser à fermùer le fichier une fois terminé car sinon rest verrouillé
file.close()