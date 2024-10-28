import fsPromises from 'node:fs/promises';
import fs from 'node:fs';
import https from 'node:https';
import { paths } from './config.js';
/**
 * Créer le script executables/init.js
 */
// 

/**
 * Créer un outil de ligne de commande pour l'application (Inquirer.js)
 * * Lancer le script de ligne de commande
 * * Le script doit afficher un message d'accueil et suggérer les langues de films disponibles
 * NB: Les langues de films sont disponibles dans le fichier `languages.json`
 */


/*
* * Créer une Entity Movie
* * Créer le Movie Service instanciant l'interface (classe absraite en JS) Service
* * * La classe abstraite verifie l'existence et le type de la clé API
* * * Le Movie Service prend en constructeur une clé d'API TMDB
* * Methode 1 : Récupérer les films populaires de la langue Française
* * Methode 2 : Sauvegarder les films populaires dans un fichier JSON
*/


/**
 * Créer un système de mise en cache pour les requêtes HTTP
 */

/**
 * Renvoyer les requêtes via un format JSON
 */

// const req = await fetch(paths.tmdb.genres + "?language=fr" , {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
//     }
// })

// console.log(await req.json());

const imagesPath = `${import.meta.dirname}/public/images`;
const languagesDatas = JSON.parse(await fsPromises.readFile(`${import.meta.dirname}/datas/languages.json`, 'utf-8'));


async function downloadFlag(url, path) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const stream = fs.createWriteStream(path);
            res.pipe(stream);

            stream.on("finish", async () => {
                stream.close();
                const stat = await fsPromises.stat(path);
                if(!stat.size) await fsPromises.unlink(path);
                resolve(path);
            })
            // res.on("end", );

            res.on('error', async (err) => {
                stream.close();
                await fsPromises.unlink(path);
                console.log(err);
                resolve('')
            })
        })
    })
}

console.time("flags");


const flags = await Promise.all(
    languagesDatas.map(async lang => ({
        name: lang.english_name,
        code: lang.iso_639_1,
        flag:  await downloadFlag(`${paths.flags}/${String(lang.iso_639_1).toUpperCase()}/flat/64.png`, `${imagesPath}/${lang.iso_639_1}.png`)
    }))
)

console.timeEnd("flags");
flags.forEach(lang => console.log(lang));