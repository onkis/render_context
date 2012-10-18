var Builder = (function() {
  function Builder(content) {
    if (content !== undefined) {
      if (content.length) {
        var loc = content.length;
        while(--loc >= 0 ){
          this[loc] = content[loc];
        }
        this.length = content.length;
      }
      else{
        this[0] = content;
        this.length = 1;
      }
    }
    return this;
  }
  
  Builder.prototype.size = function(){
    return this.length;
  };
  
  Builder.prototype.pushStack = function(){
    var ret = new Builder(arguments);
    ret.prevObject = this;
    return ret;
  };
  
  Builder.prototype.end = function(){
    return this.prevObject || new Builder(); 
  };
  
  return Builder;
})();
module.exports = Builder;