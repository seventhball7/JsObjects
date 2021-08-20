const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const ires=require('../mapObject.js');
function cback(key,val){
    if(typeof val=='number'){
<<<<<<< HEAD
    return val*2;
    }
    else if(typeof val=='string'){
        return val+" added string";
    }
=======
    return val+5;
    }
    else if(typeof val=='string'){
        return val + "  add ";
    }
  }
>>>>>>> 4c69f7933b0032f1d81c4f1d17dd4e25214b463e




 let res=mapObject(testObject, cback);
console.log(res);
