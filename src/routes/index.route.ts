// =================== import packages ==================
import { Router } from 'express';
// ======================================================
import IndexController from '@/controller/index.controller';
import { Routes } from '@/interface/routes.interface';

class IndexRoute implements Routes {
  public path = '';

  public router = Router();

  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.indexController.index);
    this.router.post(`${this.path}/webhook`, this.indexController.webhookCallback);
  }
}

export default IndexRoute;
