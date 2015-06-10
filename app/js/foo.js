window.Foo = (function() {

  function Foo() {
    this.sortArray = function(x){
      var copy =  x.slice().sort();
      return copy;
    };

    this.hasValue = function(obj, thing){
      if (obj.indexOf(thing) >= 0){
        return true;
      }else{
        return false;
      }
    };
  }

  Foo.prototype.plusOne = function(x) {
    return x + 1;
  };
  Foo.greet = function (x){
    return ("Hello, " + x + "!");
  };

  return Foo;

})();
