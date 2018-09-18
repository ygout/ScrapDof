import * as fs from 'fs';
import * as util from 'util'

export const fsPromise = {

    /**
       *
       * @param path <string> | <Buffer> | <URL>
       * @returns {Promise<any>}
       */
    async readdir(path: any): Promise<any> {
        try {
            const readdirP = util.promisify(fs.readdir);
            return await readdirP(path);
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    /**
      *
      * @param path <string> | <Buffer> | <URL>
      * @returns {Promise<any>}
      */
    async readFile(path: any): Promise<any> {
        try {
            const readFilerP = util.promisify(fs.readFile);
            return await readFilerP(path);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}