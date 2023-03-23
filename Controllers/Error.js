exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
        TituloPagina: 'Página no encontrada', 
        Ruta: '/404'
    });
};