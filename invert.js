module.exports=invert=(obj)=>{

    const obj2 = {};
 Object.entries(obj).forEach(anyval=>{
   let key=anyval[0];
   let keyval=anyval[1];
   obj2[keyval]=key;
 })
 
   return obj2;

}
 