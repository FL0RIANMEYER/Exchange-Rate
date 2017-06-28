import jsonwebtoken  from 'jsonwebtoken';
import { jwtSecret } from '../config/keys';
import jwtDecode     from 'jwt-decode';

const jwt = {
    createToken: (user, expiresIn = '7d') => (
        jsonwebtoken.sign(
            { iat: Math.floor(Date.now() / 1000) - 30, data: user },
            jwtSecret,
            { expiresIn: expiresIn, issuer: 'urn:umt' }
        )),
    verify: token => (
        new Promise((resolve, reject) => {
            jsonwebtoken.verify(token, jwtSecret, { issuer: 'urn:umt' }, (err, decoded) => {
                if(err) { reject(err); }
                else { resolve(decoded); }
            });
        })),
    decode: token => jwtDecode.decode(token),
};


export default jwt;
