import * as sql from 'mssql';

export const config = {
    user: 'j2',
    password: '123456',
    server: 'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port: 1982,
    database: "JIBE_Main_Training",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};


const poolPromise: Promise<sql.ConnectionPool> = new sql.ConnectionPool(config)
    .connect()
    .then((pool: sql.ConnectionPool) => {
        console.log("Connected to SQL Server");
        return pool;
    })
    .catch((err: any) => {
        console.error("Database Connection Failed! ", err);
        throw err;
    });

export { sql, poolPromise };
