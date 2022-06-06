'user strict';

//1. Producer
//Promise가 생성되면 자동으로 executor가 실행된다.

const promise = new Promise((resolve,reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('shyun');
    },2000);
});

//2. Consumers : then catch finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');  //성공과 실패에 상관없이 마지막에 실행하고싶을때.
    });

    //3. Promise chaining
    const fetchNumber = new Promise((resolve, reject ) =>{
        setTimeout(() => resolve(1),1000);
    })
    fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => resolve(num -1), 1000);
        });
    })
    .then(num => console.log(num));

//4. Error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'),1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject (new Error(`error! ${hen} => 🥚`)), 1000);
});

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🥘`), 1000);
    });


    getHen()
    .then(getEgg)
    .catch(error => {
        return "🥟";
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);


    // getHen()
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));

