const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const form = fs.readFileSync(path.join(__dirname, 'public', 'form.html'));

http
    .createServer((req, res) => {
        if (req.method === 'GET') {
            get(res);
            return;
        }
        if (req.method === 'POST') {
            post(req, res);
            return;
        }
        error(405, res);
    })
    .listen(3000, () => console.log('Server running on http://localhost:3000/'));
function get (res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(form);
}
function error (code, res) {
    res.statusCode = code;
    res.end(http.STATUS_CODES[code]);
}
function post (req, res) {
    if (req.headers['content-type'] !== 'application/json') {
        error(415, res);
        return;
    }
    let input = '';
    req.on('data', (chunk) => {
        input += chunk.toString();
    });
    req.on('end', () => {
        try {
            const parsed = JSON.parse(input);
            console.log('Received data: ', parsed);
            res.end('"data": ', + input + '}');
        } catch (err) {
            error(400, res);
        }
    });
}