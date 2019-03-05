const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      expect(starWars.all).toContain()
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toContain('Luke Skywalker');
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWars.all).not.toContain('Ben Quadinaros');

    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      const randomItem = starWars.random()

      expect(starWars.all).toContain(randomItem);
    });

    test('should return an array of random items if passed a number', () => {
      const number = 3
      const arrayRandom = starWars.random(number)

      expect(starWars.all).toIncludeAllMembers(arrayRandom);
    });
  });
});
