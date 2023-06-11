let array=[
    "hacking started",
    "hacking in progress",
    "hacking completed",
    "acc hacked"
];

function sleepfun(ms){
    return new Promise((resolve,reject) => setTimeout(resolve,ms));
}


for(let i=0;i<array.length;i++){
    console.log(array[i]);
    sleepfun(2000);
}
  
  async function printArrayWithDelay() {
    for (let i = 0; i < array.length; i++) {
      await sleepfun(2000);
      console.log(array[i]);
    }
  }
  
  printArrayWithDelay();
  
    

