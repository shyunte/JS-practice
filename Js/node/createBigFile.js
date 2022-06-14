const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for ( let i = 0; i<= 1_000_000; i++){   // 1기가 짜리 big.txt가 만들어짐 하지만 백만으로함 너무커서 
    file.write('안녕하세요. 엄청나게 큰 파일을 만들어 보겟습니다. 각오하세융!');
}
file.end();