/**
 * Créer les dossiers 
 * * .cache
 * * public
 * * public/images
 * * cli
 * * src
 * * src/entities
 * * src/services
 *  
 * Créer les fichiers
 * * src/services/Cli.js
 * * src/services/MovieService.js
 * * src/entities/Movie.js
 * * .cache/tmdb-requests.json
 *
 *  NB: Le script doit-être optimisé pour les performances
 */ 

/**
 * Télécharger les drapeaux des langues de films
 * NB: L'URL des drapeaux prend en paramètre /:code/:style(flat pour nous)/size.png
 * NB2: Prévoir un placeholder au cas où le drapeau n'est pas trouvé
 * 

 */


import fs from "node:fs/promises";

const dirname = import.meta.dirname + "/..";

const createDir = async (path) => {
    try {
        await fs.mkdir(`${dirname}/${path}`, { recursive: true });
        console.log(`Le dossier ${path} a été créé avec succès`);
    } catch (error) {
        console.error(`Erreur lors de la création du dossier ${path}`);
    }
}

const createFile = async (filename, data = "") => {
    try {
        return await fs.writeFile(`${dirname}/${filename}`, data);
        console.log(`Le fichier ${filename} a été créé avec succès`);
    } catch (error) {
        console.error(`Erreur lors de la création du fichier ${filename}`);
    }
}

const directories= [".cache", "public/images", "cli", "src/entities", "src/services"];
const files = ["src/services/Cli.js", "src/services/MovieService.js", "src/entities/Movie.js", ".cache/tmdb-requests.json"];

await Promise.all(
    directories.map(element => createDir(dirname + "/" + element))
);

await Promise.all(
    files.map(element => createFile(dirname + "/" + element))
)