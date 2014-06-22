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
