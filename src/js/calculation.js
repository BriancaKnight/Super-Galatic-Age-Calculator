export default class Calculation {
  constructor(currentAge, pastAge, futureAge) {
    this.currentAge = currentAge;
    this.pastAge = pastAge;
    this.futureAge = futureAge;
  }

  passed() {
    return this.currentAge - this.pastAge;
  }

  future() {
    return this.futureAge - this.currentAge;
  }
}