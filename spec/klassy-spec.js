;(function() {
  'use strict';

  describe('Klass', function() {
    it('exists as a function', function() {
      expect(window.Klass).toEqual(jasmine.any(Function));
    });

    it('returns a constructor', function() {
      expect(window.Klass()).toEqual(jasmine.any(Function));
    });

    // should throw an error
    // it('throws?', function() {
    //   expect(window.Klass('stringgg')).toEqual(jasmine.any(Function));
    // });

    describe('the returned constructor when called with an EMPTY object, "{}"', function() {
      var ReturnedConstructor;
      beforeEach(function() {
        ReturnedConstructor = window.Klass();
      });

      it('throws the: "Invalid call to class function, please use the `new Class` to instantiate an object" error when not called with new', function() {
        expect(function() { ReturnedConstructor(); }).toThrow("Invalid call to class function, please use the `new Class` to instantiate an object");
      });

      it('returns an EMPTY object', function() {
        expect(new ReturnedConstructor()).toEqual({});
      });

      describe('.extends', function() {
        it('exists as a function', function() {
          expect(ReturnedConstructor.extends).toEqual(jasmine.any(Function));
        });

        it('accepts an object as a parameter and copies the objects properties into the object that will be created by invoking the constructor', function() {
          var props = {
            foo: 'foo',
            bar: 'bar',
            testFunc: function() {
              return 'baz';
            }
          };
          ReturnedConstructor.extends(props);
          expect(new ReturnedConstructor()).toEqual(props);
        });

        it('throws the error, "ArgumentTypeError in .extends: expected object, got null" when null is received as the parameter', function() {
          expect(function() { ReturnedConstructor.extends(null); }).toThrow('ArgumentTypeError in .extends: expected object, got null');
        });

        it('throws the error, "ArgumentTypeError in .extends: expected object, got string" when a string is received as the parameter', function() {
          expect(function() { ReturnedConstructor.extends("some string") }).toThrow('ArgumentTypeError in .extends: expected object, got string');
        });

        it('throws the error, "ArgumentTypeError in .extends: expected object, got number" when a number is received as the parameter', function() {
          expect(function() { ReturnedConstructor.extends(3) }).toThrow('ArgumentTypeError in .extends: expected object, got number');
        });

        it('throws the error, "ArgumentTypeError in .extends: expected object, got boolean" when a boolean is received as the parameter', function() {
          expect(function() { ReturnedConstructor.extends(true) }).toThrow('ArgumentTypeError in .extends: expected object, got boolean');
          expect(function() { ReturnedConstructor.extends(false) }).toThrow('ArgumentTypeError in .extends: expected object, got boolean');
        });
      });

      describe('.implements', function() {
        it('exists as a function', function() {
          expect(ReturnedConstructor.implements).toEqual(jasmine.any(Function));
        });

        it('throws the error, "ArgumentTypeError in .implements: expected object, got null" when null is received as the parameter', function() {
          expect(function() { ReturnedConstructor.implements(null); }).toThrow('ArgumentTypeError in .implements: expected array, got null');
        });

        it('throws the error, "ArgumentTypeError in .implements: expected object, got string" when string is received as the parameter', function() {
          expect(function() { ReturnedConstructor.implements('some string'); }).toThrow('ArgumentTypeError in .implements: expected array, got string');
        });

        it('throws the error, "ArgumentTypeError in .implements: expected object, got number" when number is received as the parameter', function() {
          expect(function() { ReturnedConstructor.implements(3); }).toThrow('ArgumentTypeError in .implements: expected array, got number');
        });

        it('throws the error, "ArgumentTypeError in .implements: expected object, got boolean" when boolean is received as the parameter', function() {
          expect(function() { ReturnedConstructor.implements(true); }).toThrow('ArgumentTypeError in .implements: expected array, got boolean');
          expect(function() { ReturnedConstructor.implements(false); }).toThrow('ArgumentTypeError in .implements: expected array, got boolean');
        });
      });
    });

    describe('the returned constructor when called with an NON-EMPTY object', function() {
      var ReturnedConstructor,
          klassParams;
      beforeEach(function() {
        klassParams = {
          testInstanceVariable: 'hello',
          testInstanceMethod: function() {
            return 'I am an instance method';
          }
        };
        ReturnedConstructor = window.Klass(klassParams);
      });

      it('throws the: "Invalid call to class function, please use the `new Class` to instantiate an object" error when not called with new', function() {
        expect(function() { ReturnedConstructor(); }).toThrow("Invalid call to class function, please use the `new Class` to instantiate an object");
      });

      describe('.implements', function() {
        it('exists as a function', function() {
          expect(ReturnedConstructor.implements).toEqual(jasmine.any(Function));
        });
      });

      describe('.extends', function() {
        it('exists as a function', function() {
          expect(ReturnedConstructor.extends).toEqual(jasmine.any(Function));
        });
      });
    });
  });
})();

// "use strict";

// describe('The `extends` method on the constructor function returned from invoking the Klass function', function() {
//   var FooClass;
//   beforeEach(function() {
//     FooClass = Klass();
//   });

//   it('exists (as a function)', function() {
//     expect(typeof FooClass.extends).toBe('function');
//   });

//   it('throws an ArgumenTypeError when it is invoked with undefined: `ArgumentTypeError in .extends: expected object, got undefined`', function() {
//     expect(function() { FooClass.extends(); }).toThrow('ArgumentTypeError in .extends: expected object, got undefined');
//     expect(function() { FooClass.extends(undefined); }).toThrow('ArgumentTypeError in .extends: expected object, got undefined');
//   });

//   it('throws an ArgumenTypeError when it is invoked with null: `ArgumentTypeError in .extends: expected object, got null`', function() {
//     expect(function() { FooClass.extends(null); }).toThrow('ArgumentTypeError in .extends: expected object, got null');
//   });

//   it('throws an ArgumenTypeError when it is invoked with a function: `ArgumentTypeError in .extends: expected object, got function`', function() {
//     expect(function() { FooClass.extends(function() {}); }).toThrow('ArgumentTypeError in .extends: expected object, got function');
//   });

//   it('takes an object as its parameter and makes it available through prototypal inheritance', function() {
//     var objToExtend = {
//       foo: 'bar',
//       lorem: function() {
//         return 'ipsum';
//       }
//     };
//     FooClass.extends(objToExtend);

//     expect(FooClass.prototype.lorem).toBe(objToExtend.lorem);
//     expect(FooClass.prototype.foo).toBe(objToExtend.foo);
//   });

//   it('returns the same constructor that it is called on (allowing it to be chainable)', function() {
//     expect(FooClass).toBe(FooClass.extends({ foo: 'bar' }));
//   });
// });

// describe('Klassy utility functions', function() {
//   describe('Klassy.isEmpty', function() {
//     var isEmpty;
//     beforeEach(function() {
//       isEmpty = Klassy.isEmpty;
//     });

//     it('returns true if passed an empty object', function() {
//       expect(isEmpty({})).toBe(true);
//       expect(isEmpty(new Object())).toBe(true);
//     });

//     it('returns false if passed a non-empty object', function() {
//       expect(isEmpty({ foo: 'bar' })).toBe(false);
//     });
//   });
// });


// "use strict";

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