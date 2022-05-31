const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
const {promisify} = requiere('util');
const { database } = requiere('./keys');


const pool = mysql.createPool(database);

pool.getConnection((err, Connection) =>{
    if (err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (Connection) Connection.release();
    console.log('DB is connected');
    return;
});

pool.query = promisify(pool.query);
module.exports = pool;