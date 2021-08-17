const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const ires=require('../mapObject.js');
function cback(val){
    return val;

}
let res=mapObject(testObject, cback);
console.log(res);
