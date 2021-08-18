module.exports=mapObject=(obj,cb)=>{
    let arr=[];
    for(let i in obj){
        arr.push(cb(i,obj[i]));
    }
  return arr;
}