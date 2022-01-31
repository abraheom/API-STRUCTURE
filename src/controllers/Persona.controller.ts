import { Request,Response,NextFunction } from "express";
import { PersonaDAO } from "../dao/Persona.dao";
import { RESTController } from "../interfaces/RESTController.interface";

export class PersonaController implements RESTController {
    private daoPersona:PersonaDAO = new PersonaDAO();
    
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        res.send(req.body);
    }
    async read(req: Request, res: Response,next:NextFunction) {
        //res.send(await this.daoPersona.read());
        res.send({"ServerStatus":"Online"});
    }
    update(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }   
}