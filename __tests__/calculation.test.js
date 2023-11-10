import Calculation from "../src/js/calculation.js";

describe('Calculation', () => {
  let newCalculation;
  let age1 = 100;
  let age2 = 50;

  beforeEach(() => {
    newCalculation = new Calculation(age1, age2);
  });

  test('It should create a constructor for calculations of two numbers', () => {
    expect(newCalculation.age1).toEqual(100);
    expect(newCalculation.age2).toEqual(50);
  });
});


