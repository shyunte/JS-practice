{  // computed property 
console.log("-----------------------------------");
console.log("-----------------------------------");

    function makeObj(key, val) {
        return{
            [key] : val,
        };
    }
    const obj = makeObj("성별", 30);
    console.log(obj);

}
{ // object assign
console.log("-----------------------------------");
console.log("-----------------------------------");
    const user = {
        name : "shyun",
        age : 30,
    };


    const user2 = Object.assign({},user);
    user2.name = "yoon" 


    console.log(user);
    console.log(user2);

}

{ // Object.entries
console.log("-----------------------------------");
console.log("-----------------------------------");

const user = {
    name : 'shyun',
    hooby : 'soccer',
}

const result = Object.entries(user);

console.log(result);

}

{ // Object.FromEntries
console.log("-----------------------------------");
console.log("-----------------------------------");

let days = [
    [ "Mon","월요일"],
    [ "TUE", "화요일"]
]

const result = Object.fromEntries(days);

console.log(result);

}