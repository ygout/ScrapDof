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
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
// starting up scrapper
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            uri: url,
            method: 'GET'
        };
        const html = yield request.get(options);
    });
}
init();
