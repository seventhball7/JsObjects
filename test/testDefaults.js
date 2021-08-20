const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const ires=require('../defaults.js');
let res=defaults(testObject);
console.log(res);