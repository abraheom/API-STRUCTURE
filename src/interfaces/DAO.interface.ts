import { CRUD } from "./CRUD.interface";
import { MysqlConnection } from "../MySqlConnection";

export interface DAO extends CRUD {
    connection:MysqlConnection;
}