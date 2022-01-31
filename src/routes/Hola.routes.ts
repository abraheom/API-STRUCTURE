import { Router } from "express";
    import { HolaController } from "../controllers/Hola.controller";
    
    export class HolaRouter {
        private router:Router = Router();
        private controller:HolaController = new HolaController();
        constructor(){
            this.setRoutes();
        }
        private setRoutes(){
            this.router.route("").get((...args)=>this.controller.read(...args));
            this.router.route("").post((...args)=>this.controller.create(...args));
        }
        getRouter(){
            return this.router;
        }
    }
    