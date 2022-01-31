import { Router } from "express";
import { MainController } from "../controllers/Main.controller";

export class MainRouter {
    private router: Router = Router();
    private controller: MainController = new MainController();
    constructor() {
        this.setRoutes();
    }
    private setRoutes() {
        this.router.route("").get((...args) => this.controller.showStatus(...args));
    }
    getRouter() {
        return this.router;
    }
}