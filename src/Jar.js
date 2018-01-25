class Jar {
  constructor(type) {
    this.type = type;
    this.juice = null;
  }

  clean() {
    this.juice = null;
  }
}

export default Jar;
