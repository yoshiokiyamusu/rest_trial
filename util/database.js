const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'mlq7ddpaya3gnozv',
    password: 'n4slsu3xuaiqtbgd',
    database: 'szps1l4ru1pkph3s',
    multipleStatements: true
});




  
module.exports = pool.promise();






/*
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_db_practice',
    password: ''
});

module.exports = pool.promise();
*/
