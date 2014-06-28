;(function(global) {
  "use strict";

  var Klass = function(instanceProps) {
    var addInstanceProps,
        hasOwnProp,
        F;

    hasOwnProp = Object.hasOwnProperty;
    addInstanceProps = function(object) {
      var prop;
      for (prop in instanceProps) {
        if (hasOwnProp.call(instanceProps, prop)) {
          object[prop] = instanceProps[prop];
        }
      }
    };

    F = function() {
      // TODO: function F should also accept another object that can be used to instantiate its own properties also
      if (!(this instanceof F)) {
        throw "Invalid call to class function, please use the `new Class` to instantiate an object";
      }
      addInstanceProps(this);
      return this;
    };
    F.extends = function(parentProps) {
      if (typeof parentProps !== 'object') {
        throw 'ArgumentTypeError in .extends: expected object, got ' + (typeof parentProps);
      }
      if (parentProps === null) {
        throw 'ArgumentTypeError in .extends: expected object, got null';
      }
      var Parent = function() {};
      Parent.prototype = parentProps;
      F.prototype = new Parent();
      F.prototype.constructor = F;

      return F;
    };
    F.implements = function(methodsArr) {
      if (methodsArr === null) {
        throw 'ArgumentTypeError in .implements: expected array, got null'; 
      }
      if (toString.call(methodsArr) !== '[object Array]') {
        throw 'ArgumentTypeError in .implements: expected array, got ' + (typeof methodsArr);
      }
      var i = 0,
          methodsLength = methodsArr.length,
          f = new F();
      for (; i < methodsLength; i++) {
        if (typeof methodsArr[i] !== 'string') {
          throw 'ArgumentTypeError in .implements: expected an array of strings';
        }
        if (typeof f[methodsArr[i]] !== 'function') {
          throw 'ImplementsError: Klass does not implement ' + methodsArr[i];
        }
      }
      return F;
    };

    // finally return F
    return F;
  };

  global.Klass = global.Klass || Klass;
})(window);