const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host:                   "localhost",
        user:                   "root",
        password:               "MoraySocks1991",
        database:               "baseprueba",
        waitForConnections:     true,
        connectionLimit:        10,
        maxIdle:                10,
        idleTimeout:            60000,
        qeueLimit:              0

    }).promise();

console.log("Conexion correcta");

module.exports = {connection}