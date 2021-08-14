function NoticiasDAO(connection){
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
  this._connection.query('SELECT * FROM noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback){
  this._connection.query('SELECT * FROM noticias WHERE id = ?', id, callback);
}

NoticiasDAO.prototype.storeNoticia = function(noticia, callback){
  this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasDAO.prototype.getLast5 = function(callback){
  this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
}

module.exports = function() {
  return NoticiasDAO;
}