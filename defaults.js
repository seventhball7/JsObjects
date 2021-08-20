module.exports=defaults=(obj, defaultProps={})=>{
if(obj.hasOwnProperty(defaultProps)){
    return  undefined;
  
  }
  else 
    return   obj;
}
 