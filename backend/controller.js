const fs = require('fs');
const storeValue = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

const getValue = (filePath) => {
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    return null;
  }
};

module.exports = { storeValue, getValue };
