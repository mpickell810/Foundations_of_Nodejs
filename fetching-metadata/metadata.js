const fs = require('node:fs');

const file = process.argv[2];

function printMetadata(file) {
    try {
        const fileStats = fs.startSync(file);
        console.log(fileStats);
    } catch (err) {
        console.error('Error reading file path:', file);
    }
}

printMetadata(file);