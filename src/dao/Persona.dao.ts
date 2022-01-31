import { DAO } from "../interfaces/DAO.interface";
import { MysqlConnection } from "../MySqlConnection";
import { Persona } from "../models/Persona";

export class PersonaDAO implements DAO {
    connection:MysqlConnection = new MysqlConnection(); 
    create() {
        throw new Error("Method not implemented.");
    }
    async read() {
        let personas:Persona[] = [];
        let results:any = await this.connection.query("select * from persona");
        for(let per of results){
            let persona = new Persona();
                persona.id = per.id;
                persona.nombres = per.nombres;
                persona.apellidos = per.apellidos;
            personas.push(persona);
        }
        return personas;
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}