/*
function data(a){
    return new Promise(function(resolve,reject){
        if(a==0){
            resolve("resolved")
        }
        else{
            reject("rejected");
        }
        
    })
    
    
}
data(0).then((result) =>console.log(result));
*/

/*
let data= new Promise((resolved,rejected)=>{
    const a=5,b=3;
    const c=a+b;
    if(c===8){
        resolved("yes");
    }else{
        rejected("no");
    }
})
data.then((result)=>console.log(result))
.catch((err)=>console.log(err))
*/

// function data(a,b,c){
//     return new Promise(function(resolve,reject){
//         c=a+b
//         if(c===5){
//             resolve("yes")
//         }else{
//             reject("no")
//         }
// })
// }
// data(2,3).then((result)=>console.log(result))
// .catch((err)=>console.log(err))


function sayHello(){
    console.log("hello")
}
//sayHello()
let add=(a,b,callback)=>{
    // let a=20;b=40;
    // let c=a+b;
    console.log(a+b);
    callback()
}
add(40,50,sayHello)