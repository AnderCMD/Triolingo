exports.getIndex = (req, res, next) => {
    res.render('Invitado/index', {
        TituloPagina: 'Triolingo - Aprender nunca fue tan facil',
        Ruta: '/'
    });
};

exports.getLogin = (req, res, next) => {
    res.render('Invitado/Login', {
        TituloPagina: 'Iniciar Sesion',
        Ruta: '/Invitado/Login'
    });
};

exports.getRegistrarse = (req, res, next) => {
    res.render('Invitado/Registrarse', {
        TituloPagina: 'Crea una cuenta',
        Ruta: '/Invitado/Registrarse'
    });
};
