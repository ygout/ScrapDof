import * as request from 'request-promise-native';

const urlEquipements: string = 'https://www.dofus-touch.com/fr/mmorpg/encyclopedie/equipements?size=96&page=';


export const equipementsScrapper = {
    // starting up scrapper
    async  laodEquipements(pageNumber: number): Promise<any> {
        
        const options: any = {
            uri: urlEquipements + pageNumber,
            method: 'GET'
        };
        const html = await request.get(options);
        return html;
    },
    
    async  laodEquipement(url: string): Promise<any> {
        
        const options: any = {
            uri: url,
            method: 'GET'
        };
        const html = await request.get(options);
        return html;
    }
}