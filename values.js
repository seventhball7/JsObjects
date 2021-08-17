module.exports=values=(obj)=>{
    const arr=[];
    for(let i in obj){
        arr.push( obj[i]);
    }
    return arr;
}

