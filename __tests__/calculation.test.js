import Calculation from "../src/js/calculation.js";

describe('Calculation', () => {
  let calculation;

  beforeEach(() => {
    calculation = new Calculation(100, 50, 200);
  });

  test('It should create a caculation constructor with current, past, and future ages.', () => {
    expect(calculation.currentAge).toEqual(100);
    expect(calculation.pastAge).toEqual(50);
    expect(calculation.futureAge).toEqual(200);
  });

  test('It should create a prototype that finds years passed between two ages', () => {
    expect(calculation.passed()).toEqual(50);
  });
});



