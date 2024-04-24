import path from 'path';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import { IncomingMessage, Server, ServerResponse } from 'http';
import http from 'http';
import { DEFAULT_ENVIRONMENT } from './helper/common.helper';
import { Routes } from './interface/routes.interface';
import { API_PORT, NODE_ENV } from './config';

export default class App {
  readonly app: express.Application;
  readonly env: string;
  readonly API_PORT: string | number;
  // private readonly strategies: Strategy[];
  constructor(data: { apiRoutes: Routes[]; generalRoutes: Routes[] }) {
    this.app = express();

    this.env = NODE_ENV || 'development';
    this.API_PORT = API_PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(data.apiRoutes);
    this.initializeRoutes(data.generalRoutes, false);
  }

  private readonly initializeMiddlewares = () => {
    this.app.use('/public/images', express.static(path.join(__dirname, '../public/images')));

    this.app.set('trust proxy', 1);
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(__dirname, './templates'));
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    if (NODE_ENV === 'development') {
      this.app.use(
        session({
          cookie: {
            secure: true,
            maxAge: 60000,
          },
          secret: 's-s-secret',
          resave: false,
          saveUninitialized: true,
        }),
      );
    }

    this.app.use('/assets', express.static(path.join(process.cwd(), '/public/assets')));
    this.app.use(`images/`, express.static(path.join(process.cwd(), '/public/images')));
  };

  private readonly initializeRoutes = (routes: Routes[], setVersion = true) => {
    routes.forEach((route) => {
      this.app.use( route.router);
    });
  };

  public listen = async () => {
    this.app.listen(this.API_PORT, () => {
      console.log('=================================');
      console.log(`======= ENV: ${this.env} ========`);
      console.log(`App listening on the port ${this.API_PORT}`);
      console.log('=================================');
    });
    
  };
}
