const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
  if (error) {
    console.error('fail to read file');
    return;
  }

  console.info('it is from fileReadCallback');
  console.log(data);
}

const filePath = path.resolve(__dirname, 'notes.txt');
// read file on asynchrounous process
fs.readFile(filePath, 'utf-8', fileReadCallback);
// read file on syncrhonous process
const fileDataSync = fs.readFileSync(filePath, 'utf-8');
console.log(fileDataSync);