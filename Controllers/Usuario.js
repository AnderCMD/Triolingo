exports.getNiveles = (req, res, next) => {
    res.render('Usuario/Niveles', {
        TituloPagina: 'Niveles de aprendizaje',
        Ruta: '/Usuario/Niveles'
    });
};

exports.getInhabilitado = (req, res, next) => {
    res.render('Usuario/Inhabilitado', {
        TituloPagina: 'Trabajando en mejorar tu experiencia',
        Ruta: '/Usuario/Inhabilitado'
    });
};

exports.getNivelA1 = (req, res, next) => {
    res.render('Usuario/Nivel-A1', {
        TituloPagina: 'Nivel A1',
        Ruta: '/Usuario/Nivel-A1'
    });
};

exports.getNivelA2 = (req, res, next) => {
    res.render('Usuario/Nivel-A2', {
        TituloPagina: 'Nivel A2',
        Ruta: '/Usuario/Nivel-A2'
    });
};

exports.getNivelB1 = (req, res, next) => {
    res.render('Usuario/Nivel-B1', {
        TituloPagina: 'Nivel B1',
        Ruta: '/Usuario/Nivel-B1'
    });
};

exports.getNivelB2 = (req, res, next) => {
    res.render('Usuario/Nivel-B2', {
        TituloPagina: 'Nivel B2',
        Ruta: '/Usuario/Nivel-B2'
    });
};

exports.getNivelAuditivo = (req, res, next) => {
    res.render('Usuario/NivelAudio', {
        TituloPagina: 'Nivel Auditivo',
        Ruta: '/Usuario/nivelAudio'
    });
};

