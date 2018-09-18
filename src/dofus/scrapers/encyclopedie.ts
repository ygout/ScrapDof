// import * as request from 'request-promise-native';
// import * as fs from 'fs';
// import * as path from 'path';
import { fsPromise } from '../../helper/promisify/fs.promise';

export class DofusEncyclopedie {

    protected url: string = 'https://www.dofus-touch.com/fr/mmorpg/encyclopedie/';

    public constructor(){

    }

    public async execute(): Promise<void> {

        // on parcours tous les dossier de encyclopedie
        let currentFileName: string =  String(__filename.split(/[\\/]/).pop());
        currentFileName = currentFileName.substr(0, currentFileName.indexOf('.'));

        // récupération de tous les dossier dans encyclopédie
        const dirs: any = await fsPromise.readdir('./src/dofus/parser/' + currentFileName);
        console.log(dirs);
        for (let dir of dirs) {
            // lecture des sous répertoire
            let files: any = await fsPromise.readdir('./src/dofus/parser/' + currentFileName + '/' + dir);
            // load module dynamcly
            let mymodule: any = require('./src/dofus/parser/' + currentFileName + '/' + dir + '/' + files[0]);
            
            console.log(mymodule);
        }
        // On parcours tous les fichiers exemple de equipements
           
    }
}