const fs = require('node:fs');
const path = require('node:path');

const file = path.join(process.cwd(), 'file.txt');

fs.watchFile(file, (current, previous) => {
    const formatter = new Intl.DateTimeFormat('en-GB', {dateStyle: 'full', timeStyle: 'long'});

const formattedTime = formatter.format(current.mtime);
    return console.log(`${file} updated ${formattedTime}`);
});