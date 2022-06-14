//비동기 백그라운드와 큐 처리방식

const fs = require('fs');

fs.readFile('./read.txt', (err,data) =>{
    if(err) {
        throw err;
    }
    console.log('1번',data.toString());   
    });

    fs.readFile('./read.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log("2번", data.toString());
    });

    fs.readFile('./read.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
    });

    fs.readFile('./read.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log("4번", data.toString());
    });