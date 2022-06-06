'user strict';



console.log('1');     //동기
setTimeout(()=>console.log('2'),1000);  //비동기
console.log("3");   //동기

//Synchronous callback
function printImmediately(print) {         //function은 호이스팅되어서 맨 위로 끌어올림
    print();
}
printImmediately(()=> console.log('hello'));   //동기

//Asynchronous callback
function printWithDelay(print,timeout){        //호이스팅되어서 그다음 맨 위로 끌어올림
    setTimeout(print,timeout);
}
printWithDelay(()=> console.log('async callback'),2000);  //비동기


// callback 지옥 예제

class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'shyun' && password === '123123')  ||
                (id === 'yoon' && password === '123123')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user ==='shyun'){
                onSuccess({name : 'shyun', role : 'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
        
    }

}

const UserStorage = new UserStorage();
const id = prompt('enter your id ');
const password = prompt('etner your password');
UserStorage.loginUser(
    id, 
    password,
    user => {
        UserStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    "Hello ${userWithRole.name}, you have a ${userWithRole.role} role"
                );
            },
            error => {console.log('error');
            }
            );
    },
    error=>{console.log('error');
}
);