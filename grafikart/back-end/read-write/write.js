//// METHODE WRITE ////

import { copyFile, unlink } from "node:fs";
import { stat, writeFile } from "node:fs/promises";

await writeFile('text.txt', ' les gens', {encoding: 'utf-8', flag: 'a'})

// await copyFile() : copie un fichier

// await unlink() : supprime un fichier

const stats =  await stat('text.txt')
console.log(stats)