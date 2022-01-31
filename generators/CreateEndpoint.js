const colors = require("colors");
const fs = require("fs");

// Nombre del EndPoint a crear
let endPoint = process.argv[2];

console.log(`Creating EndPoint files for "${endPoint}"`);

// Crear Router
fs.writeFile(`./src/routes/${endPoint}.routes.ts`, genRouterTemplate(endPoint), function (err) {
    if (err) throw err;
    console.log("Success!!!".green);
}); 

// Crear DAO
fs.writeFile(`./src/dao/${endPoint}.dao.ts`, genDAOTemplate(endPoint), function (err) {
    if (err) throw err;
    console.log("Success!!!".green);
}); 

// Crear Model
fs.writeFile(`./src/models/${endPoint}.ts`, genModelTemplate(endPoint), function (err) {
    if (err) throw err;
    console.log("Success!!!".green);
}); 

// Crear Controller
fs.writeFile(`./src/controllers/${endPoint}.controller.ts`, genControllerTemplate(endPoint), function (err) {
    if (err) throw err;
    console.log("Success!!!".green);
}); 



function genRouterTemplate(endPoint){
    return `import { Router } from "express";
import { ${endPoint}Controller } from "../controllers/${endPoint}.controller";

export class ${endPoint}Router {
    private router:Router = Router();
    private controller:${endPoint}Controller = new ${endPoint}Controller();
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
`;
}

function genDAOTemplate(endPoint) {
    return `import { DAO } from "../interfaces/DAO.interface";
import { MysqlConnection } from "../MySqlConnection";
import { ${endPoint} } from "../models/${endPoint}";

export class ${endPoint}DAO implements DAO {
    connection:MysqlConnection = new MysqlConnection(); 
    create() {
        throw new Error("Method not implemented.");
    }
    async read() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}`;
}

function genModelTemplate(endPoint) {
return `export class ${endPoint}{
    id!: number;
    name!: string;
}`;
}

function genControllerTemplate(endPoint) {
    return `import { Request,Response,NextFunction } from "express";
import { ${endPoint}DAO } from "../dao/${endPoint}.dao";
import { RESTController } from "../interfaces/RESTController.interface";

export class ${endPoint}Controller implements RESTController {
    private dao${endPoint}:${endPoint}DAO = new ${endPoint}DAO();
    
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        res.send(req.body);
    }
    async read(req: Request, res: Response,next:NextFunction) {
        //res.send(await this.dao${endPoint}.read());
        res.send({"ServerStatus":"Online"});
    }
    update(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response, next: NextFunction) {
        throw new Error("Method not implemented.");
    }   
}
`;
}