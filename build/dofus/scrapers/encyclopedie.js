"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as request from 'request-promise-native';
// import * as fs from 'fs';
// import * as path from 'path';
const fs_promise_1 = require("../../helper/promisify/fs.promise");
class DofusEncyclopedie {
    constructor() {
        this.url = 'https://www.dofus-touch.com/fr/mmorpg/encyclopedie/';
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // on parcours tous les dossier de encyclopedie
            let currentFileName = String(__filename.split(/[\\/]/).pop());
            currentFileName = currentFileName.substr(0, currentFileName.indexOf('.'));
            // récupération de tous les dossier dans encyclopédie
            const dirs = yield fs_promise_1.fsPromise.readdir('./src/dofus/parser/' + currentFileName);
            console.log(dirs);
            for (let dir of dirs) {
                // lecture des sous répertoire
                let files = yield fs_promise_1.fsPromise.readdir('./src/dofus/parser/' + currentFileName + '/' + dir);
                // load module dynamcly
                let mymodule = require('./src/dofus/parser/' + currentFileName + '/' + dir + '/' + files[0]);
                console.log(mymodule);
            }
            // On parcours tous les fichiers exemple de equipements
        });
    }
}
exports.DofusEncyclopedie = DofusEncyclopedie;
