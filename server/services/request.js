import http from 'http';


export default function(
    hostname,
    path,
    { port = '80', method = 'GET', query, args } = { port: '80', method: 'GET' }) {
    return new Promise((resolve, reject) => {
        const data = args ? JSON.stringify({ args }) : '';
        const options = {
            hostname,
            port,
            method,
            path: path + (query ? '?' + query.join('&').toString() : ''),
            headers: { 'Content-Length': Buffer.byteLength(data) },
        };
        const req = http.request(options, (res) => {
            let data = '';

            res.setEncoding('utf8');
            res.on('data', chunk => { data += chunk; });
            res.on('end', () => {
                try { resolve(JSON.parse(data)); }
                catch (e) { reject(e); }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
}
