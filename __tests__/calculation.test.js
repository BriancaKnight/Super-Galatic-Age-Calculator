import Calculation from "../src/js/calculation.js";

describe('Calculation', () => {
  let newCalculation;
  let num1 = 100;
  let num2 = 50;

  beforeEach(() => {
    newCalculation = new Calculation(num1, num2);
  });

  test('It should create a constructor for calculations of two numbers', () => {
    expect(newCalculation.num1).toEqual(100);
    expect(newCalculation.num2).toEqual(50);
  });
});


