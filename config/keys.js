import fs from 'fs';

// mail credentials as Object { user: 'yyyy', password: 'xxxx', host: 'smtp.xx.zzz', ssl: true }
import mailCredentials from './mailCredentials';


const exchangeRate = 'XXXXXX'; // API Key for openexchangerates.org
const jwtSecret    = 'YYYYYY'; // JWT sync secret

const httpsCrt = fs.readFileSync(__dirname + '/https.crt');
const httpsKey = fs.readFileSync(__dirname + '/https.key');


export         { mailCredentials, exchangeRate, jwtSecret, httpsCrt, httpsKey };
export default { mailCredentials, exchangeRate, jwtSecret, httpsCrt, httpsKey };
