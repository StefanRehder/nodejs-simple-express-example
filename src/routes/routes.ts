import * as express from 'express'
import { Hero } from '../models/hero';

export class Routes {
    // Use api service
    // protected api: database.API;

    constructor() {}

    defaultRoute(req: express.Request, res: express.Response){
        res.sendFile('index.html', {root: './src/views'});
    }

    paths(app: express.Application) {
        app.get('/', (req: express.Request, res: express.Response) => {
            this.defaultRoute(req, res);
        });

        app.get("/hero/:name", function (req, res) {
            let name: string = req.params.name;
            let data: Hero = ({
                name: "Robin",
                strength: 1
            });

            if(data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'Hero not found!' });
            }
          });

        app.get('*', (req: express.Request, res: express.Response) => {
            this.defaultRoute(req, res);
        });
    }
}
