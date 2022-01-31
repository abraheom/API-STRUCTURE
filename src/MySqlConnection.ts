import mysql,{ Connection } from "mysql";

export class MysqlConnection {
    private static connection:Connection;
    constructor(){
        this.getConnection();   
    }
    getConnection(){
        if(MysqlConnection.connection==undefined){
            MysqlConnection.connection = mysql.createConnection({
                host     : 'byemyx41xipfcqem3u46-mysql.services.clever-cloud.com',
                user     : 'ues67rr7xabylkny',
                password : 'bjw0Mdk7yoSpjit2DkfR',
                database : 'byemyx41xipfcqem3u46'
            });
            MysqlConnection.connection.connect();
            console.log("Conexion establecida...");
        }
        return MysqlConnection.connection;
    }
    closeConnection(){
        MysqlConnection.connection.end();
    }
    query(_query:string){
        return new Promise((resolv,reject)=>{
            MysqlConnection.connection.query(_query,(error, results, fields)=>{
                if(error){
                    reject(error);
                }
                else {
                    resolv(JSON.parse(JSON.stringify(results)));
                }
            });
        });
    }
}