import * as fs from 'fs';
import * as fsPath from 'fs-path';
import { dofusService } from './services/dofus.service';
import * as cm from './cli-view/cmd';
import { asciiHelper } from './helpers/asciHelper';


// starting up scrapper
async function init(): Promise<void> {

    asciiHelper.asciiArt();

}

