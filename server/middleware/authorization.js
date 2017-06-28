import jwt from '../jwt';

/**
 * Check if token exist and is valid
 * @param  {Object}   services
 * @return {Function}
 */
export default services => async (req, res, next) => {
    const token = req.body.token ||
                  req.query.token ||
                  (req.get('Authorization') || '').replace('Bearer ', '');

    if(token) {
        try {
            const encryptedToken = await jwt.verify(token);
            const newToken = jwt.createToken(encryptedToken.data, '5d');

            req.userToken = encryptedToken;
            res.cookie('Authorization', newToken, {
                expires: new Date(Date.now() + 900000),
                httpOnly: false,
            });
        } catch (err) { res.status(401).send({ error: 'unauthorized' }); return; }
    }

    next();
};
