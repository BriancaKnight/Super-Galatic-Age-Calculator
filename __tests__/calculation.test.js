import Calculation from "../src/js/calculation.js";

describe('Calculation', () => {
  let newCalculation;
  let pastAge = 50;
  let currentAge = 100;
  let futureAge = 200;

  beforeEach(() => {
    newCalculation = new Calculation(pastAge, currentAge, futureAge);
  });

  test('It should create a constructor for calculations of three ages', () => {
    expect(newCalculation.pastAge).toEqual(50);
    expect(newCalculation.currentAge).toEqual(100);
    expect(newCalculation.futureAge).toEqual(200);
  });

  test('It should create a prototype to find years passed between two ages', () => {
    expect(newCalculation.yearsPassed()).toEqual(50)
  });

  test('It should create a prototype to find the sum between two ages', () => {
    expect(newCalculation.yearsToCome()).toEqual(100)
  });
});
