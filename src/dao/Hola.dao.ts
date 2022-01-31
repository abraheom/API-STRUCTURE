import { DAO } from "../interfaces/DAO.interface";
import { MysqlConnection } from "../MySqlConnection";
import { Hola } from "../models/Hola";

export class HolaDAO implements DAO {
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
}