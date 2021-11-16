var p = document.getElementById('para');
var p1 = document.getElementById("para1");
var p2 = document.getElementById("para2");
var data;
async function a() {  

    var response = await fetch("https://reqres.in/api/users?page=2");  

    var data = await response.json();
    
    return data;
    
}
a().then( (res) => {
    console.log(res)
    let res2 = res.data;
    //let s = JSON.stringify(res2[1].name);
   // let t = JSON.stringify(res[1].alpha2Code);
    p.innerHTML=Object.values(res2[0]);
    })
    .catch((e)=>{
    console.log(e);
     })

a().then( (res) => {
    let res2 = res.data;
    //let s = JSON.stringify(res2[1].name);
   // let t = JSON.stringify(res[1].alpha2Code);
    p1.innerHTML=Object.values(res2[1]);
    })
    .catch((e)=>{
    console.log(e);
     })

     a().then( (res) => {
        let res2 = res.data;
        //let s = JSON.stringify(res2[1].name);
       // let t = JSON.stringify(res[1].alpha2Code);
        p2.innerHTML=Object.values(res2[2]);
        })
        .catch((e)=>{
        console.log(e);
         })

         /*a().then((res) =>{
    let res1 = res.data;
    let s = JSON.stringify(res1[0]);
    p.innerHTML =s;
})
.catch((e) =>{
    console.log(e);
})*/

/*a().then((res) =>{
    let res1 = res.data;
    let s =  JSON.stringify(res1[1]);
    p1.innerHTML =s;
})
.catch((e) =>{
    console.log(e);
})*/



 