import Juice from './Juice';

const radio = 0.1;
const juicing = weight => weight * radio;

class Juicer {
  constructor() {
    this.fruit = null;
    this.juice = null;
  }
  placeFruit(fruit) {
    this.fruit = fruit;
  }
  createJuice() {
    this.juice = new Juice(this.fruit.name, juicing(this.fruit.weight));
    this.fruit = null;
    return this.juice;
  }
  getOutJuice(jars) {
    const juice = this.juice;
    jars.clean();
    jars.juice = juice;
    this.juice = null;
    return true;
  }
}

export default Juicer;
