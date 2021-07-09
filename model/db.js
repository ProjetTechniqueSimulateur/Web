const mysql=require('mysql');
const pool=mysql.createPool({
    connectionLimit:10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    debug:true
});

function createAccount(nom, prenom, email, username, password, newmdp, callback) {
    newmdp=0;
    console.log(nom,prenom,email,username,password,newmdp);
    pool.query('INSERT INTO identification (nom, prenom, mail, login, motPasse, newMdp) VALUES (?,?,?,?,?,?)'
    , [nom, prenom, email, username, password,newmdp]
    , function (error, results, fields) {
        console.log(error);
        callback();
    });
}

exports.createAccount=createAccount;