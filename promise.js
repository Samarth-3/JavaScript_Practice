
let datas=[
    {name:"ram",gender:"M"},
    {name:"riya",gender:"F"}
]

function showDatas(){
    setTimeout(()=>{
        let output='';
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}

function adddata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject(new Error("Something went wrong"));
            }
        },2000)
    })
}

adddata({name:"mansi",gender:"F"}).then(showDatas).catch(err=>console.log(err));

// async function start(){
//     await adddata({name:"mansi",gender:"F"})
//     showDatas();
// }
// start();