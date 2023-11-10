export default class Calculation {
  constructor(pastAge, currentAge, futureAge) {
    this.pastAge = pastAge;
    this.currentAge = currentAge;
    this.futureAge = futureAge;
  }

  yearsPassed() {
    return this.currentAge - this.pastAge;
  }

  yearsToCome() {

  }
}