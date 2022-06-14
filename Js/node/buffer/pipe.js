const fs = require('fs');
const zlib = require('zlib');     //

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16});
const zlibStream = zlib.createGzip();   //readme 파일을 16바이트씩 스트리밍해주면서 압출을 해줌
const writeStream = fs.createWriteStream('./writeme4.txt.gz');

readStream.pipe(zlibStream).pipe(writeStream);
