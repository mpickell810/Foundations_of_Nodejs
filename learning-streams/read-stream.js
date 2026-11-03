const fs = require('node:fs');

const rs = fs.createReadStream('./file.txt');
rs.on('data', (data) => {
    console.log('Read chunck:', data.toString());
});
rs.on('end', () => {
    console.log('No more data.');
});