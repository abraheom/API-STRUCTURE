import { DAO } from "../interfaces/DAO.interface";
import { MysqlConnection } from "../MySqlConnection";
import { User } from "../models/User";

export class UserDAO implements DAO {
    connection: MysqlConnection = new MysqlConnection();
    create() {
        throw new Error("Method not implemented.");
    }
    async read() {
        let users: User[] = [];
        let results: any = await this.connection.query("select * from user");
        for (let result of results) {
            console.log(result);
            let user = new User();
            user.id = result.id;
            user.user = result.user;
            user.pass = result.pass;
            user.ip = result.ip;
            users.push(user);
        }
        return users;
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }

    async createUser(user: User) {
        console.log("CREANDO USUARIO:", user);

        // Ingresar el usuario en la base de datos
        this.connection.query(`insert into user(user,pass,ip) values('${user.user}','${user.pass}',${user.ip});`);
    }

    async updateIpFromID(user:User) {
        this.connection.query(`update user set ip=${user.ip} where id='${user.id}'`);
    }

    async findUserByIP(ip:string){
        let user = undefined;
        let results: any = await this.connection.query(`select * from user where ip='${ip}' limit 1;`);
        for (let result of results) {
            user = new User();
            user.id = result.id;
            user.user = result.user;
            user.pass = result.pass;
            user.ip = result.ip;
        }
        return user;
    }
}