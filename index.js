console.log('.............................................');
console.log('///////// ASYNC/AWAIT = ASYNC/WAIT //////////');
console.log('..............................................');

var result1=document.getElementById('result1');

var dell={
    brand:'dell',
    harddisk:'2 TB',
    color:'Blue'
}
var hp={
    brand:'HP',
    harddisk:'4 TB',
    color:'Black'
}
var notAvailble={
    brand:'Not Available',
    harddisk:'1 TB',
    color:'no color'
}
var buyLaptop= new Promise(
    (resolve,reject) =>{
       setTimeout(() => {resolve(dell)},5000);
   }
);

function fetch1(){
    result1.innerText='fetching data';
    buyLaptop.then(apoorv => {
        console.log(apoorv);
        result1.innerText=JSON.stringify(apoorv);
    });
}


//Ex-02 with async/await
var result2=document.getElementById('result2');
async function fetch2(){
    result2.innerText='fetching data ...';
    let data= await buyLaptop;
    result2.innerText=JSON.stringify(data);
}

//Ex-03 with async/await

var result3=document.getElementById('result3');

var buyLaptop2= fetch('https://jsonplaceholder.typicode.com/posts')
                .then(serverResponse => serverResponse.json());

async function fetch3(){
    result3.innerText='fetching data ...';
    let  serverResponse = await buyLaptop2;
    result3.innerText=JSON.stringify(serverResponse);
   
}