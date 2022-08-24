import sql from 'mssql';
import conStr_sql from '../configx.mjs';

// const sqlConfig={
//     user: process.env.API_DB_USER,
//     password: process.env.API_DB_PWD,
//     database: process.env.API_DB_NAME,
//     server: process.env.API_DB_SERVER,
//     pool: {
//       max: 10,
//       min: 0,
//       idleTimeoutMillis: 30000
//     },
//     options: {
//       encrypt: true, // for azure
//       trustServerCertificate: true // change to true for local dev / self-signed certs
//     }
//   };
// console.log(sqlConfig);
console.log(conStr_sql);

  
async function getConexion() {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            const pool=await sql.connect(conStr_sql)
            const result = await pool.request().query('select * from Almacen ')
            console.dir(result)
            } 
            catch (err) {
                 console.log(err);
             }    
    }

export default getConexion;

 




