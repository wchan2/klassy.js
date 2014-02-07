"use strict";

describe('Klass', function() {
  it('is a function', function() {
    expect(typeof Klass).toBe('function');
  });

  it('returns a constructor function when called', function() {
    var Foo = Klass();
    expect(typeof Foo).toBe('function');
  });

  describe('the _constructor_ function that it returns when called', function() {
    it('throws an error when called without the `new` keyword: `Invalid call to class function, please use the `new Class` to instantiate an object`', function() {
      var FooClass = Klass();
      expect(function() { FooClass(); }).toThrow(new Error('Invalid call to class function, please use the `new Class` to instantiate an object'));
    });
  });
});

describe('The constructor function returned when Klass is invoked with no arguments', function() {
  var isEmpty;
  beforeEach(function() {
    isEmpty = Klassy.isEmpty;
  });

  it('returns a constructor function that creates an empty object', function() {
    var FooClass = Klass(),
        foo = new FooClass();

    expect(isEmpty(foo)).toBe(true);
  });
});

describe('The constructor function returned when Klass is invoked an empty object', function() {
  var isEmpty;
  beforeEach(function() {
    isEmpty = Klassy.isEmpty;
  });

  it('returns a constructor function that creates an empty object', function() {
    var FooClass = Klass({}),
        foo = new FooClass();

    expect(isEmpty(foo)).toBe(true);
  });
});

describe('The constructor function returned when Klass is invoked with a _non-empty_ object', function() {
  var isEmpty,
      FooClass,
      foo,
      properties;

  beforeEach(function() {
    isEmpty = Klassy.isEmpty;
    properties = {
      bar: 'baz',
      lorem: function() {
        return 'ipsum';
      }
    };

    FooClass = Klass(properties);
    foo = new FooClass();
  });

  it('returns a constructor function that creates a _non-empty_ object', function() {
    expect(isEmpty(foo)).toBe(false);
  });

  describe('The object returned when instantiating the constructor function', function() {
    it('should have the same properties as the object that was passed into Klass', function() {
      expect(foo.bar).toBe(properties.bar);
      expect(foo.hasOwnProperty('bar')).toBe(true);

      expect(foo.lorem).toBe(properties.lorem);
      expect(foo.hasOwnProperty('lorem')).toBe(true);
    });
  });
});