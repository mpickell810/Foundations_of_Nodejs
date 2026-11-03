const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const form = fs.readFileSync(path.join(__dirname, 'public', 'form.html'));
const { formidable } = require('formidable');

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
    .listen(3000, () => {
        console.log('Server is listening on http://localhost:3000');
    });
    function get (res) {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end(form)
    }
    function error (code, res) {
        res.statusCode = code;
        res.end(http.STATUS_CODES[code]);
    }
    function post (req, res) {
        if (!/multipart\/form-data/.test(req.headers['content-type'])) {
            error(415, res);
            return;
        }
        const form = formidable({
            keepExtensions: true,
            uploadDir: './uploads'
        });
        form.parse(req, (err, fields, files) => {
            if (err) return error(400, err);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({ fields, files }));
        });
    }