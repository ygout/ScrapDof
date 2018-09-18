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
const request = require("request-promise-native");
const urlEquipements = 'https://www.dofus-touch.com/fr/mmorpg/encyclopedie/equipements?size=96&page=';
exports.equipementsScrapper = {
    // starting up scrapper
    laodEquipements(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                uri: urlEquipements + pageNumber,
                method: 'GET'
            };
            const html = yield request.get(options);
            return html;
        });
    },
    laodEquipement(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                uri: url,
                method: 'GET'
            };
            const html = yield request.get(options);
            return html;
        });
    }
};
