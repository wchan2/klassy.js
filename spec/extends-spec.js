"use strict";

describe('The `extends` method on the constructor function returned from invoking the Klass function', function() {
  var FooClass;
  beforeEach(function() {
    FooClass = Klass();
  });

  it('exists (as a function)', function() {
    expect(typeof FooClass.extends).toBe('function');
  });

  it('throws an ArgumenTypeError when it is invoked with undefined: `ArgumentTypeError in .extends: expected object, got undefined`', function() {
    expect(function() { FooClass.extends(); }).toThrow('ArgumentTypeError in .extends: expected object, got undefined');
    expect(function() { FooClass.extends(undefined); }).toThrow('ArgumentTypeError in .extends: expected object, got undefined');
  });

  it('throws an ArgumenTypeError when it is invoked with null: `ArgumentTypeError in .extends: expected object, got null`', function() {
    expect(function() { FooClass.extends(null); }).toThrow('ArgumentTypeError in .extends: expected object, got null');
  });

  it('throws an ArgumenTypeError when it is invoked with a function: `ArgumentTypeError in .extends: expected object, got function`', function() {
    expect(function() { FooClass.extends(function() {}); }).toThrow('ArgumentTypeError in .extends: expected object, got function');
  });

  it('takes an object as its parameter and makes it available through prototypal inheritance', function() {
    var objToExtend = {
      foo: 'bar',
      lorem: function() {
        return 'ipsum';
      }
    };
    FooClass.extends(objToExtend);

    expect(FooClass.prototype.lorem).toBe(objToExtend.lorem);
    expect(FooClass.prototype.foo).toBe(objToExtend.foo);
  });

  it('returns the same constructor that it is called on (allowing it to be chainable)', function() {
    expect(FooClass).toBe(FooClass.extends({ foo: 'bar' }));
  });
});