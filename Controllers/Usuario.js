exports.getInicio = (req, res, next) => {
    res.render('Usuario/Inicio', {
        TituloPagina: 'Triolingo - Bienvenido',
        Ruta: '/Usuario/Inicio'
    });
};