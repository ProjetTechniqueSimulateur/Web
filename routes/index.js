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
    res.redirect('/');
  });
});

router.get('/logout',function(req,res,next){
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
