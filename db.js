const mysql=require('mysql');


const pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'titi',
    password:'titi',
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

function comparePassword(username,password, callback ){
    
    pool.query("SELECT * FROM identification WHERE login = ?",[username], 
    function(error, results,fields){
        console.log(error,results,username);
        if(results.length==0){
            callback("login_invalid");
        }
        else{
            callback();
            const mdpF=password;
            const mdpBDD=results.motPasse;
            console.log(mdpBDD);

            const verified=bcrypt.compareSync(mdpF,mdpBDD);
            if(verified){
                console.log("les mdp sont identiques")
            }
            else{
                callback("CREDENTIALS_INVALID");
            }
        }
        });
    
}

exports.comparePassword= comparePassword;
