const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ massage: 'Token not provideds' })
    }

    const [, token] = authHeader.split(' ')

    try {
        const decoded = await promisify(jwt.verify)(token, 'secret');

        req.userId = decoded.id

        return next()
    } catch(error) {
        return res.status(401).json({ massage: 'Token invalid' })
    }

    return next()
}