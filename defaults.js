module.exports=defaults=(obj, defaultProps={})=>{
for(let i in obj){
  if(obj[i]=='undefined'){
    obj[i]=defaultprops[i];
  }
}
<<<<<<< HEAD
 
=======
return obj;
}
  
>>>>>>> 4c69f7933b0032f1d81c4f1d17dd4e25214b463e
