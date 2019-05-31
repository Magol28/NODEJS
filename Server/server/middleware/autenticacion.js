const jwt = require('jsonwebtoken');

let verficatoken = (req, res, next) => {
    const token = req.get('token');
    jwt.verify(token, process.env.SEED, (error, decoded) => {
        if (error) {
            return res.json(401).json({
                ok: false
            })
        }
        req.usuario = decoded.usuario;
        next();
    })


}

module.exports = {
    verficatoken
}