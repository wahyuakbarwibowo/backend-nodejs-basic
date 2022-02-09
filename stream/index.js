const fs = require('fs');
const path = require('path');

const sourceFile = path.resolve(__dirname, 'input.txt');
const destinationFile = path.resolve(__dirname, 'output.txt');
const readableStream = fs.createReadStream(sourceFile, { highWaterMark: 15 });
const writableStream = fs.createWriteStream(destinationFile);
readableStream.on('readable', () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (err) {
    console.error(err);
  }
});

readableStream.on('end', () => {
  writableStream.end('');
  console.log('done');
});