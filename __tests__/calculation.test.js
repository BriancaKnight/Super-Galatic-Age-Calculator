import Calculation from "../src/js/calculation.js";

describe('Calculation', () => {
  const calculation = new Calculation(100,50,200) 
  test('It should create a caculation constructor with current, past, and future ages.', () => {
    expect(calculation.currentAge).toEqual(100);
    expect(calculation.pastAge).toEqual(50);
    expect(calculation.futureAge).toEqual(200);
  });
});


