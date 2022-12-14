const sql = require('mssql/msnodesqlv8') 
const config = { database: 'PosVentas',
                 server: '*****',
                 user:'sa',
                 password:'*****',
                 driver: 'msnodesqlv8'
                }   

            
const poolPromise = new sql.ConnectionPool(config) 
                    .connect()
                    .then(pool => { 
                                console.log('Connected to MSSQL');
                                return pool; }
                        )
                    .catch(err => console.log('Database Connection Failed! Bad Config: ', err)) 

module.exports = { sql, poolPromise}