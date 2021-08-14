module.exports = (application) => {

  application.get('/noticias', (req,res) => {

      application.app.controllers.noticias.noticias(application, req, res);

  });

  application.get('/noticias/:id', (req,res) => {

      application.app.controllers.noticias.noticia(application, req, res);

  });
}