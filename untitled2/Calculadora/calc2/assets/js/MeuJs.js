

function e(msg,time){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('Erro');
                return;
            }
            resolve(msg.toUpperCase());
        },time)
    })
}
async function x(){
    try{
        const t1 = await e(123, 4000);
        console.log(t1)
        const t2 = await e('T2', 1000);
        console.log(t2)
        const t3 = await e('T3', 3000);
        console.log(t3)
    }catch(e){
        console.log(e);
    }
}
x();