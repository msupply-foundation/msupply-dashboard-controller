const fs = require('fs');
const path = require('path');

const getData = (filename) => {
    const filepath = path.join(__dirname, filename);
    const dataRaw = fs.readFileSync(filepath);
    const dataJson = JSON.parse(dataRaw);

    return dataJson;
}

module.exports = { getData };