import { Request,Response,NextFunction } from "express";
import { RESTController } from "../interfaces/RESTController.interface";

export class MainController implements RESTController {
    create(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }
    read(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }
    
    async showStatus(req: Request, res: Response,next:NextFunction){
        res.send({
            "Status":"Online",
            datetime:(new Date())
        });
    }
}