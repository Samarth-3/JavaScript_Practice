//inside inspect _> application 

let key=prompt("Enter the key");
let value=prompt("Enter the value");

localStorage.setItem(key,value);
console.log(localStorage.getItem(key));

if(key=="red"){
    localStorage.removeItem(key);
}

if(key=="green"){
    localStorage.clear();
}

localStorage.length; //returns the number of items in the storage
localStorage.key(0); //returns the key of the first item
localStorage.getItem(key); //returns the value of the item with the given key
/Users/samarth/Desktop/WebDev/Extras/Js_practice
