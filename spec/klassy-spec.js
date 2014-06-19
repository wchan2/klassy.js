
;(function() {
  'use strict';

  describe('Klassy', function() {
    describe('#isEmpty', function() {
      it('exists as a function', function() {
        expect(window.Klassy.isEmpty).toEqual(jasmine.any(Function));
      });

      it('takes an object as a parameter and returns true if the object is empty', function() {
        expect(window.Klassy.isEmpty({})).toBe(true);
      });

      it('takes an object as a parameter and returns false if the object is not empty', function() {
        var obj = { test: 'test' };
        expect(window.Klassy.isEmpty(obj)).toBe(false);
      });
    });
  });
})();



// describe('The `implements` method on the constructor function returned from invoking the Klass function', function() {
//   var FooClass;
//   beforeEach(function() {
//     FooClass = Klass({
//       initialInstanceMethod: function() {}
//     }).extends({
//       parentMethod: function() {}
//     });
//   });

//   it('exists (as a function)', function() {
//     expect(typeof FooClass.implements).toBe('function');
//   });

//   describe('`implements` method\'s ArgumentTypeErrors', function() {
//     it('throws an ArgumenTypeError when passed with undefined: `ArgumentTypeError in .implements: expected array, got undefined`', function() {
//       expect(function() { FooClass.implements(); }).toThrow('ArgumentTypeError in .implements: expected array, got undefined');
//       expect(function() { FooClass.implements(undefined); }).toThrow('ArgumentTypeError in .implements: expected array, got undefined');
//     });

//     it('throws an ArgumenTypeError when passed with null: `ArgumentTypeError in .implements: expected array, got null`', function() {
//       expect(function() { FooClass.implements(null); }).toThrow('ArgumentTypeError in .implements: expected array, got null');
//     });

//     it('throws an ArgumenTypeError when passed with an object: `ArgumentTypeError in .implements: expected array, got object`', function() {
//       expect(function() { FooClass.implements({}); }).toThrow('ArgumentTypeError in .implements: expected array, got object');
//       expect(function() { FooClass.implements(new Object()); }).toThrow('ArgumentTypeError in .implements: expected array, got object');
//     });

//     it('throws an ArgumenTypeError when passed with a function: `ArgumentTypeError in .implements: expected array, got function`', function() {
//       expect(function() { FooClass.implements(function() {}); }).toThrow('ArgumentTypeError in .implements: expected array, got function');
//     });

//     it('throws an ArgumenTypeError when it is _not_ passed a string of functions: `ArgumentTypeError in .implements: expected an array of strings`', function() {
//       expect(function() { FooClass.implements([function() {}]); }).toThrow('ArgumentTypeError in .implements: expected an array of strings');
//       expect(function() { FooClass.implements([{}]); }).toThrow('ArgumentTypeError in .implements: expected an array of strings');
//       expect(function() { FooClass.implements([1]); }).toThrow('ArgumentTypeError in .implements: expected an array of strings');
//       expect(function() { FooClass.implements([1]); }).toThrow('ArgumentTypeError in .implements: expected an array of strings');
//     });
//   });
  
//   describe('`implement` method\'s ImplementsErrors', function() {
//     it('throws an ImplementsError when testing for the implementation of an _instance_ method or an _extended_ method: ', function() {
//       expect(function() {
//         FooClass.implements(['testMethod']);
//       }).toThrow('ImplementsError: Klass does not implement testMethod');
//     });
//   });

//   it('takes an array of strings that represent method names and attempt to call the methods', function() {
//     FooClass.implements(['initialInstanceMethod', 'parentMethod']);
//     var foo = new FooClass();

//     spyOn(foo,'initialInstanceMethod');
//     foo.initialInstanceMethod();

//     spyOn(foo, 'parentMethod');
//     foo.parentMethod();

//     expect(foo.initialInstanceMethod).toHaveBeenCalled();
//     expect(foo.parentMethod).toHaveBeenCalled();
//   });

//   it('returns the same constructor that it is called on (allowing it to be chainable)', function() {
//     expect(FooClass).toBe(FooClass.implements(['parentMethod']));
//   });
// });