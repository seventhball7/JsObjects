module.exports=defaults=(obj, defaultProps={})=>{
if(obj.hasOwnProperty(defaultProps)){
    return  obj[defaultProps]
  
  }
  else 
    return   'undefined';
}
    