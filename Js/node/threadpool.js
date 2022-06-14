const crypto = require("crypto");

// 기본적으로 fs, crypto 는 4개의 쓰레드를 쓴다.
// 자기 코어 갯수에 맞게 사용하려면 UV_THREADPOOL_SIZE=8 이라고 하면 8개의 쓰레드를 사용한다.
// 윈도우는 SET UV_THREADPOOL_SIZE

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("2", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("3", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("4", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("5", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("6", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("7", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("8", Date.now() - start);
});