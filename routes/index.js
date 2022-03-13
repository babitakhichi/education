var express = require('express');
var router = express.Router();
var indexModel = require('../models/indexmodel')
/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index');
});
router.get('/registration', (req, res, next)=>{
  res.render('registration',{'output':''});
});
router.post('/registration', (req, res, next)=>{
  // console.log("Registeration Data", req.body)
  indexModel.registerUser(req.body).then((result)=>{
      if(result==0)
      res.render('registration',{'output':'user register successfully'});
      else
      res.render('registration',{'output':'already exist please login'});

  }).catch((err)=>{
    console.log(err)
  })
});
router.get('/login', (req, res, next)=>{
  res.render('login',{'output':''});
});
router.post('/login', (req, res, next)=>{
  
  indexModel.userLogin(req.body).then((result)=>{
    if(result.length>0)
    {
     req.session.sunm=req.body.email
    res.redirect('/users')
    }
    else
    res.render('login',{'output':'Invalid user'});

    }).catch((err)=>{
    console.log(err)
    })
 
});

router.get('/adminlogin', (req, res, next)=>{
  res.render('adminlogin',{'output':''});
});
      router.post('/adminlogin', (req, res, next)=>{
          indexModel.adminLogin(req.body).then((result)=>{
          if(result.length>0)
          {
          req.session.sunm=req.body.email
          res.redirect('/admin')
          }
          else
          res.render('adminlogin',{'output':'Invalid admin'});

          }).catch((err)=>{
          console.log(err)
          })
      
      });




module.exports = router;
