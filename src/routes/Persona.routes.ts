import { Router } from "express";
import { PersonaController } from "../controllers/Persona.controller";

export class PersonaRouter {
    private router:Router = Router();
    private controller:PersonaController = new PersonaController();
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