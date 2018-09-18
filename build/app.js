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
const encyclopedie_1 = require("./dofus/scrapers/encyclopedie");
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
// starting up scrapper
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        // const options: any = {
        //     uri: url,
        //         method: 'GET'
        // };
        // const html = await request.get(options);
        let dofus = new encyclopedie_1.DofusEncyclopedie();
        dofus.execute();
    });
}
init();
