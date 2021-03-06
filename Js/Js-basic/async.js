'user strict';

{
//1. async
async function fetchUser(){
        // do network request in 10 secs......
        return ('shyun');
}

const user = fetchUser();
user.then(console.log);
console.log(user);

}



// 2. wait
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return 'π';
}

async function getBanana(){
    await delay(2000);
    return 'π';
}

// function pickFruits(){
//     return getApple()
//     .then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

//async and await

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}` 
}

pickFruits().then(console.log);



// 3. useful Promise API

function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then (fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);



// μ μΌ λ¨Όμ  λ°μμ€λ κ°λ§ μΆλ ₯
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}


pickOnlyOne().then(console.log);