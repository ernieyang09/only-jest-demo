import Juicer from '../Juicer';
import Juice from '../Juice';
import Fruit from '../Fruit';

describe('Juicer', () => {
  let juicer;
  beforeEach(() => {
    juicer = new Juicer();
  });
  test('constructor', () => {
    expect(juicer).toEqual({
      fruit: null,
      juice: null,
    });
  });
  describe('METHOD', () => {
    test('placeFruit', () => {
      const apple = new Fruit('apple', 1000);
      juicer.placeFruit(apple);
      expect(juicer.fruit).toEqual(apple);
    });
    // intergration test
    test('placeFruit', () => {
      const apple = new Fruit('apple', 1000);
      juicer.placeFruit(apple);
      expect(juicer.createJuice()).toEqual(new Juice('apple', 100));
      expect(juicer.fruit).toBe(null);
    });
    test('placeFruit2', () => {
      juicer.fruit = new Fruit('apple', 1000);
      expect(juicer.createJuice()).toEqual(new Juice('apple', 100));
      expect(juicer.fruit).toBe(null);
    });

    test('getOutJuice', () => {
      const jar = {}; // dummy
      jar.clean = jest.fn(); // mock
      juicer.juice = new Juice('apple', 100);
      expect(juicer.getOutJuice(jar)).toBe(true);
      expect(jar.clean).toBeCalled();
      expect(juicer.juice).toBe(null);
    })
  });
})
