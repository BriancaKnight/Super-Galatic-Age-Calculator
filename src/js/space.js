export default class Age {
  constructor(earth) {
    this.earth = earth;
  }

  mercury() {
    return this.earth * .24;
  }

  venus() {
    return this.earth * .62;
  }

  mars() {
    return this.earth * 1.88;
  }
}