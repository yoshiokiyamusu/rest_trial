const db = require('../util/database');

module.exports = class Nombre {
    constructor(id, usuario, password, hashed_password) {
      this.id = id;
      this.usuario = usuario;
      this.password = password;
      this.hashed_password = hashed_password;
    }
  
    save() {
      return db.execute(
        'INSERT INTO tb_usuario (usuario, password, hashed_password) VALUES (?, ?, ?)',
        [this.usuario, this.password, this.hashed_password]
      );
    }
  
   // static deleteById(id) {}
  
    static fetchAll() {
      return db.execute('SELECT * FROM tb_usuario');
    }
  
    static findById(username) {
      return db.execute('SELECT count(*) as rownum, usuario, password,hashed_password FROM tb_usuario WHERE tb_usuario.usuario = ?', [username]);
    }
  
  
  };

  module.exports = class Book {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
    }
  
    save() {
      return db.execute(
        'INSERT INTO books (title, content) VALUES (?, ?)',
        [this.title, this.content]
      );
    }
  
  
  };