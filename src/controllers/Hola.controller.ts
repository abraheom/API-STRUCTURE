import { Request,Response,NextFunction } from "express";
import { HolaDAO } from "../dao/Hola.dao";
import { RESTController } from "../interfaces/RESTController.interface";

export class HolaController implements RESTController {
    private daoHola:HolaDAO = new HolaDAO();
    
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        res.send(req.body);
    }
    async read(req: Request, res: Response,next:NextFunction) {
        //res.send(await this.daoHola.read());
        res.send({"ServerStatus":"Online"});
    }
    update(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }   
}
