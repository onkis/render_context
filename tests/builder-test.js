var Builder = require('../builder.js'),
    assert = require('assert'),
    obj;


obj = new Builder({name : 'Mike',age :30, sex :'M'});
// var objA = obj.fn.init();
assert.equal(obj.name, 'Mike');
// assert.equal(objA.age,obj.fn.age);
// assert.equal(objA.sex,obj.fn.sex);