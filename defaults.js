module.exports=defaults=(obj, defaultProps={})=>{
for(let i in obj){
  if(obj[i]=='undefined'){
    obj[i]=defaultprops[i];
  }
}
return obj;
}
  