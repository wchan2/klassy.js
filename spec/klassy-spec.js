;(function() {
  'use strict';

  describe('Klass', function() {
    it('exists', function() {
      expect(window.Klass).toEqual(jasmine.any(Function));
    });

    it('returns a constructor', function() {
      expect(window.Klass()).toEqual(jasmine.any(Function));
    });

    describe('the returned constructor', function() {
      it('throws an error when called without the `new` keyword', function() {
        var ReturnedConstructor = window.Klass();
        expect(function() { ReturnedConstructor(); }).toThrow();
      });

      it('returns an empty object when called with an empty object', function() {
        var ReturnedConstructor = window.Klass();
        expect(new ReturnedConstructor()).toEqual({});
      });

      it('returns the same object with the same key and values when passed the same object', function() {
        var ReturnedConstructor, klassParams;

        klassParams = {
          testInstanceVariable: 'hello',
          testInstanceMethod: function() {
            return 'I am an instance method';
          }
        };
        ReturnedConstructor = window.Klass(klassParams);
        expect(new ReturnedConstructor()).toEqual(klassParams);
      });

      describe('.extends(<object>)', function() {
        var ReturnedConstructor;
        beforeEach(function() {
          ReturnedConstructor = window.Klass();
        });

        it('exists', function() {
          var ReturnedConstructor = window.Klass();
          expect(ReturnedConstructor.extends).toEqual(jasmine.any(Function));
        });

        it('is chainable', function() {
          var ReturnedConstructor = window.Klass();
          expect(ReturnedConstructor.extends({})).toBe(ReturnedConstructor);
        });

        it('takes an object as a parameter and copies the object properties to the an object created by the constructor', function() {
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

        it('takes an object as a parameter and sets it to its prototype', function() {
          var objToExtend = {
            foo: 'bar',
            bar: function() {
              return 'ipsum';
            }
          };
          ReturnedConstructor.extends(objToExtend);

          expect(ReturnedConstructor.prototype.lorem).toBe(objToExtend.lorem);
          expect(ReturnedConstructor.prototype.bar).toBe(objToExtend.bar);
        });

        it('throws the error when passed an undefined as a parameter or no parameter', function() {
          expect(function() { ReturnedConstructor.extends(undefined); }).toThrow();
        });

        it('throws the error when passed null as a parameter', function() {
          expect(function() { ReturnedConstructor.extends(null); }).toThrow();
        });

        it('throws the error when passed a string as a parameter', function() {
          expect(function() { ReturnedConstructor.extends('some string') }).toThrow();
        });

        it('throws the error when passed a number as a parameter', function() {
          expect(function() { ReturnedConstructor.extends(3) }).toThrow();
        });

        it('throws the error when passed a boolean as a parameter', function() {
          expect(function() { ReturnedConstructor.extends(true) }).toThrow();
          expect(function() { ReturnedConstructor.extends(false) }).toThrow();
        });
      });

      describe('.implements(<array of strings>)', function() {
        var ReturnedConstructor;
        beforeEach(function() {
          ReturnedConstructor = window.Klass();
        });

        it('exists', function() {
          expect(ReturnedConstructor.implements).toEqual(jasmine.any(Function));
        });

        it('takes an array of method names', function() {
          var methodInKlass = function() {
            var Class = window.Klass({ testMethod: function() {} }).implements(['testMethod']);
            new Class();
          };
          var methodInExtends = function() {
            var Class = window.Klass().extends({ testMethod: function() {} }).implements(['testMethod']);
            new Class();
          };

          expect(methodInKlass).not.toThrow();
          expect(methodInExtends).not.toThrow();
        });

        it('is chainable', function() {
          var ReturnedConstructor = window.Klass();
          expect(ReturnedConstructor.implements([])).toBe(ReturnedConstructor);
        });

        it('throws a runtime error during invocation if the returned constructor does not implement methods listed in the array', function() {
          var methodNotInExtends = function() {
            var Class = window.Klass().extends({}).implements(['testMethod']);
            new Class();
          };
          var methodNotInKlass = function() {
            var Class = window.Klass().implements(['testMethod']);
            new Class();
          };

          expect(methodNotInKlass).toThrow();
          expect(methodNotInExtends).toThrow();
        });

        it('throws the error when given an undefined value', function() {
          expect(function() { ReturnedConstructor.implements(undefined); }).toThrow();
        });

        it('throws the error when given a null value', function() {
          expect(function() { ReturnedConstructor.implements(null); }).toThrow();
        });

        it('throws the error when given a string', function() {
          expect(function() { ReturnedConstructor.implements('some string'); }).toThrow();
        });

        it('throws the error when given a number', function() {
          expect(function() { ReturnedConstructor.implements(3); }).toThrow();
        });

        it('throws the error when given a boolean', function() {
          expect(function() { ReturnedConstructor.implements(true); }).toThrow();
          expect(function() { ReturnedConstructor.implements(false); }).toThrow();
        });

        it('throws the error when given an object', function() {
          expect(function() { ReturnedConstructor.implements({}); }).toThrow();
        });

        it('throws the error when given an array with an empty object', function() {
          expect(function() { ReturnedConstructor.implements([{}]); }).toThrow();
        });

        it('throws the error when given an array with a number', function() {
          expect(function() { ReturnedConstructor.implements([9]); })
            .toThrow("ArgumentTypeError in .implements: expected an array of strings");
        });

        it('throws the error when given an array with an undefined value', function() {
          expect(function() { ReturnedConstructor.implements([undefined]); }).toThrow();
        });

        it('throws the error when given an array with a null value', function() {
          expect(function() { ReturnedConstructor.implements([null]); }).toThrow();
        });

        it('throws the error an array with a boolean value', function() {
          expect(function() { ReturnedConstructor.implements([true]); }).toThrow();
        });
      });
    });
  });
})();