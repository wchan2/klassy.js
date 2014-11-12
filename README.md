## klassy.js

A class-y (class-like) way to write JavaScript. klassy.js emulates the common behaviors of "classical object-oriented" programming languages with classical inheritance. 

1. It builds constructor functions that _must_ be invoked with `new`
2. It allows constructors to have the behavior of `extends`
3. It forces implementation of an interface

**Note**: this is more of a fun project instead of a practical project.

## Install Dependencies

In order to install dependencies for the build and tests, run the following commands in the terminal.

	npm install
	grunt jasmine 	# to test
	grunt build 	# to build

## Example

An example of the API that is made available with Klassy.

```js
var FooClass = Klass({
	instanceVar: 'foo',
	instanceMethod: function() {
		return this.instanceVar;
	}
}).extends({
	parentVar: 'bar',
	parentMethod: function() {
		return this.parentVar;
	}
}).implements(['instanceMethod', 'parentMethod']);

var foo = new FooClass();
foo.instanceVar;
foo.instanceMethod();
foo.parentVar;
foo.parentMethod();
```

## Building

	grunt build

## Running Tests

	grunt test

## Coming Soon

- function F should also accept another object that can be used to instantiate its own properties also


## License

klassy.js is released under the [MIT License](http://www.opensource.org/licenses/MIT).