module.exports=mapObject=(obj,cb)=>{
    let arr=[];
    for(let i in obj){
        arr.push(cb(obj[i]));
    }
  return arr;
}