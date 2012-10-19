var Builder = require('../builder.js'),
    assert = require('assert'),
    obj;


obj = new Builder({name : 'Mike',age :30, sex :'M'});
var objA = obj[0];
assert.equal(objA.name, 'Mike');
assert.equal(objA.age,30);
assert.equal(objA.sex,'M');