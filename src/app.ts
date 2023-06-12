import express, {Application} from 'express'
import Logger from "./middlewares/Logger"
import JsonBodyParser from "./middlewares/JsonBodyParser"
import BeepController from './controllers/BeepController'
import UserController from './controllers/UserController';
import { UserService } from './services/UserService';
import { UserRepository } from './repositories/UserRepository';
class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number, controllers: any[], middlewares: any[] }) {
    this.app = express();
    this.port = appInit.port;
    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
  }

  listen = () =>
      this.app.listen(this.port, () => console.log(`Server is listening on port ${this.port}`));

  routes = (controllers: any[]) =>
      controllers.forEach(controller =>
          this.app.use("/api", controller.router)
      );

  middlewares = (middlewares: any[]) =>
      middlewares.forEach(middleware =>
          this.app.use(middleware)
      )
}

export default new App({
  port: 3000,
  controllers: [
    new BeepController(),
    new UserController(new UserService(new UserRepository()))
  ],
  middlewares: [Logger, JsonBodyParser]
})