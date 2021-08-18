module.exports=pairs=(obj)=>{
   let arr=[];
   for(let i in obj){
     arr.push([i, obj[i]]);
   }
   return arr;
}

