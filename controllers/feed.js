const { validationResult } = require('express-validator/check');
const Book = require('../models/visual.js');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ 
      _id: '1',
      title: 'First Post',
      content: 'This is the first post!',
      imageUrl: 'images/duck.jpg',
      creator: {
        name: 'Yoshio kiyamu'
      },
      createdAt: new Date()
     }]
  });
};

exports.createPost = (req, res, next) => {
 /* const errors = validationResult(req);
  if (!errors.isEmpty()) {   
    return res.status(422).json({
      message: 'Validation failed, entered data is incorrect.',
      errors: errors.array()
    });
  }*/
  const title = req.body.title;     
  const content = req.body.content;
  //validation
  if (title.length < 3) {   
    return res.status(422).json({
      message: 'Validation failed, pocos caracteres en campo titulo.'
      
    }); 
    console.log('mensaje de error: titulo tiene menos de 30 caracteres');  
  }
  //Insert into Mysql
  const book = new Book(null, title, content);
  book.save().then(() => {
      //res.redirect('/');
  }).catch(err => console.log(err));


  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { _id: new Date().toISOString(), 
      title: title, 
      content: content,
      creator:{name:'Yoshio'},
      createdAt:new Date()
    } 
  });
};

