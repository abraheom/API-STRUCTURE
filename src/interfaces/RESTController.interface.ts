import { Request,Response,NextFunction } from "express";

export interface RESTController {
    create(req:Request,res:Response,next:NextFunction):any;
    read(req:Request,res:Response,next:NextFunction):any;
    update(req:Request,res:Response,next:NextFunction):any;
    delete(req:Request,res:Response,next:NextFunction):any;
}