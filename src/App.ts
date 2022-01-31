import express, { Application } from "express";

//Routes
import { MainRouter } from "./routes/Main.routes";
import { PersonaRouter } from "./routes/Persona.routes";

let personaRouter = new PersonaRouter();
let mainRouter = new MainRouter();

export class App {
    app: Application;
    PORT: Number;
    constructor(port: Number = 8080) {
        this.app = express();
        this.PORT = port;

        this.middlewars();
        this.routes();
        this.listen();
    }

    async middlewars() {
        this.app.use(express.json());
    }
    async routes() {
        this.app.use("/", mainRouter.getRouter());
        this.app.use("/Persona", personaRouter.getRouter());
    }
    async listen() {
        await this.app.listen(this.PORT);
        console.log(`Server listening on port ${this.PORT}`);
    }

}