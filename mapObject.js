module.exports=mapObject=(obj,cb)=>{
    let arr=[];
    for(let i in obj){
<<<<<<< HEAD
        let newval=cb(i,obj[i]);
        arr[i]=newval;
=======
        arr.push(cb(i,obj[i]));
>>>>>>> 4c69f7933b0032f1d81c4f1d17dd4e25214b463e
    }
  return arr;
}