const Nombre = require('../models/visual.js');

exports.getIndex = (req, res, next) => {   
    Nombre.fetchAll().then(([rows, fieldData]) => {
        res.render('pruebas/registro', {
          nombres: rows

        });
      })
      .catch(err => console.log(err));
};


exports.getUserPage = (req, res, next) => {
  res.render('pruebas/nombre');
};


exports.postUserData = (req, res, next) => {
  // for (i = 0; i < 2; i++) { //multple inserts
     const usuario = req.body.usuario;
     const password = req.body.password;
     const hashed_password = req.body.password;
     console.log(req.body);
     
     const nombre = new Nombre(null, usuario, password,hashed_password);
     nombre.save().then(() => {
         res.redirect('/');
     }).catch(err => console.log(err));
     
  // }//for loop  
 };