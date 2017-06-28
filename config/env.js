const httpsPort = process.env.HTTPS_PORT || 443;
const httpPort  = process.env.HTTP_PORT  ||  80;
const hostname  = process.env.HOSTNAME   || 'localhost';


export         { hostname, httpsPort, httpPort };
export default { hostname, httpsPort, httpPort };
