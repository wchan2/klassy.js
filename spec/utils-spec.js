describe('Klassy utility functions', function() {
  describe('Klassy.isEmpty', function() {
    var isEmpty;
    beforeEach(function() {
      isEmpty = Klassy.isEmpty;
    });

    it('returns true if passed an empty object', function() {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty(new Object())).toBe(true);
    });

    it('returns false if passed a non-empty object', function() {
      expect(isEmpty({ foo: 'bar' })).toBe(false);
    });
  });
});