
const conStr_sql={
    user: process.env.API_DB_USER,
    password: process.env.API_DB_PWD,
    database: process.env.API_DB_NAME,
    server: process.env.API_DB_SERVER,
    pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
    },
    options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
}
}
const puerto={Port:process.env.API_PORT}

export {conStr_sql, puerto};
