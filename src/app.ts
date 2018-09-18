// import * as request from 'request-promise-native';
import {DofusEncyclopedie} from './dofus/scrapers/encyclopedie';
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// starting up scrapper
async function init(): Promise<void> {
    
    // const options: any = {
    //     uri: url,
    //         method: 'GET'
    // };
    // const html = await request.get(options);

    let dofus: DofusEncyclopedie = new DofusEncyclopedie();
    dofus.execute();
}

init();

