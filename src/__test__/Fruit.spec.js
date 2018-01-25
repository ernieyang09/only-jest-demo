import Fruit from '../Fruit';

describe('Fruit', () => {
  test('constructor', () => {
    const apple = new Fruit('apple', 1000);
    expect(apple).toEqual({
      name: 'apple',
      weight: 1000,
    });
  });
  describe('METHOD', () => {
    test('getName', () => {
      const apple = new Fruit('apple', 1000);
      expect(apple.getName()).toBe('apple');
    });
  });
})
