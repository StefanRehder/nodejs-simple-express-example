import { Routes } from './routes/routes';
import * as bodyParser from 'body-parser';
import * as express from 'express';

class App {
  protected app: express.Application = express();

  constructor() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    let routes = new Routes();
    routes.paths(this.app);

    var server = this.app.listen(8210, (err) => {
      if (err) {
        return console.log(err);
      }

      return console.log('Service is up and running on ' +
        `http://localhost:${server.address().port}`);
    });
  }
}

new App();
