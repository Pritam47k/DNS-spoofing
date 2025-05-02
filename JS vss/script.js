let  buymobile=false;
let p1=new Promise((resolve,reject) =>
{
   if(buymobile)
   {
    resolve("mobile purchased succesfully");
   }
   else
   {
    reject("not buyed");
   }
});

p1.then((success)=>
{
     console.log(success);
});
p1.catch((error)=>
{
    console.log(error);
});