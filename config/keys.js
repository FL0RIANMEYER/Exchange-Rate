import fs from 'fs';

import mailCredentials from './mailCredentials';


const exchangeRate = 'XXXXXX';
const jwtSecret    = 'YYYYYY';

const httpsCrt = fs.readFileSync(__dirname + '/https.crt');
const httpsKey = fs.readFileSync(__dirname + '/https.key');


export         { mailCredentials, exchangeRate, jwtSecret, httpsCrt, httpsKey };
export default { mailCredentials, exchangeRate, jwtSecret, httpsCrt, httpsKey };
