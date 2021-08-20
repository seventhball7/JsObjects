module.exports=mapObject=(obj,cb)=>{
    let arr=[];
    for(let i in obj){
        let newval=cb(i,obj[i]);
        arr[i]=newval;
        
    }
  return arr;
}