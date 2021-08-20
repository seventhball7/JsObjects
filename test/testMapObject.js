const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const ires=require('../mapObject.js');
function cback(key,val){
    if(typeof val=='number'){
    return val*2;
    }
    else if(typeof val=='string'){
        return val+" added string";
    }
   
  }




 let res=mapObject(testObject, cback);
console.log(res);
