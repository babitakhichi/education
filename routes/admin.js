var express = require('express');
var router = express.Router();
const app = require('../app');
var adminModel = require('../models/adminmodel')
/* GET users listing. */
router.get('/', (req, res, next)=>{
  res.render("admin",{'sunm':req.session.sunm});
});
router.get('/manageuser',(req, res, next)=> { 
  adminModel.fetchAll("register").then((result)=>{
    res.render("manageuser",{"userDetails":result,'sunm':req.session.sunm});
  }).catch((err)=>{
    console.log(err)
  })
  
});
router.get('/manageuserstatus',(req, res, next)=> {
  adminModel.manageUserStatus(req.query).then((result)=>{
    res.redirect('/admin/manageuser')
  }).catch((err)=>{
    console.log(err)
  })
  
});

module.exports = router;
