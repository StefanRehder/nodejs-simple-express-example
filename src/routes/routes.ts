import * as express from 'express'
import { Hero } from '../models/hero';
import { HeroCollection } from '../data/hero-collection';

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

        app.get("/hero/list", function (req, res) {
            let data: Hero[] = HeroCollection.getHeroes();
            res.status(200).send(data);
        });

        app.get("/hero/:name", function (req, res) {
            const name: string = req.params.name;
            const data: Hero = HeroCollection.getHero(name);

            if(data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'Hero not found!' });
            }
          });

        app.delete("/hero/:name", function (req, res) {
            const name: string = req.params.name;
            HeroCollection.deleteHero(name);
            res.status(204).send();
        });

        app.put("/hero", function (req, res) {
            if (!req.body)
                return res.sendStatus(400)

            if (req.body.name == 'list') {
                res.status(400)
                    .send({ message: 'The hero name "list" is not allowed!' });
                return;
            }

            HeroCollection.putHero(req.body as Hero);
            res.status(201).send();
        });

        app.get('*', (req: express.Request, res: express.Response) => {
            this.defaultRoute(req, res);
        });
    }
}
