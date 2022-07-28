//console.log('Good monring');


//1. Function defination
async function myStudent(){
    let po = new Promise((resolve, reject)=>{
        //PC
        setTimeout(()=>{
            resolve({
                msg:"OK Good Morning"
            });
        },5000);
    });

    let x =  await po;
    console.log(x.msg);

    // I have to use await keyword here..
}

//2. Function calling
myStudent()