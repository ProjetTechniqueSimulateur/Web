const mysql=require('mysql');

const pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'toto',
    password:'toto',
    database:'ISESA20_chaloin_elmourchid'
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