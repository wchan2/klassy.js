;(function(global) {
  var Klassy = Klassy || {};
  Klassy.isEmpty = function(object) {
    var prop;
    for (prop in object) {
      if (object.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

  global.Klassy = global.Klassy || Klassy;
})(window);