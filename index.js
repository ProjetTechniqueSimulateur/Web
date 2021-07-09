const db=require("../model/db.js");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});

router.post('/createAccount', function(req, res, next) {
  const {nom, prenom, email, username, password, newmdp}=req.body;
  db.createAccount(nom, prenom, email, username, password, newmdp, () => {
    res.redirect("/");
  });
});

module.exports = router;

router.post('/connect', function(req,res,next){
  const { username,password} = req.body;
  //req.session.errMessage = "";
  db.comparePassword(username,password,(error) => {
    if (error){
      //req.session.errMessage = "Les identifiants sont invalides";
      console.log(error);
    } else {
      //req.session.username = username;
      console.log("ok");

    }
    res.redirect("/");
  });
});