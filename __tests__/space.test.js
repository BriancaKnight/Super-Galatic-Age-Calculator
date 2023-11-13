import Age from "../src/js/space.js";
import Calculation from "../src/js/space.js";
;

describe('Age', () => {
  let newAge;
  let otherAge;

  beforeEach(() => {
    newAge = new Age(100);
    otherAge = new Age(50);
  });

  test('It should create a age object with earth years.', () => {
    expect(newAge.earth).toEqual(100);
  });

  test('It should create a merecury prototype to return age in Mercury years.', () => {
    expect(newAge.mercury()).toEqual(100 / .24);
  });

  test('It should create a venus prototype to return age in Venus years.', () => {
    expect(newAge.venus()).toEqual(100 / .62)
  });

  test('It should create a mars prototype to return age in Mars years.', () => {
    expect(newAge.mars()).toEqual(100 / 1.88)
  });

  test('It should create a jupiter prototype to return age in Jupiter years', () => {
    expect(newAge.jupiter()).toEqual(100 / 11.86)
  });

  // test('It should create a prototype to find years passed between two ages', () => {
  //   expect(newAge.passed(otherAge.earth)).toEqual(50);
  // });

  // test('It should create a prototype to find future years to pass between two ages', () => {
  //   expect(newAge.future(otherAge.earth)).toEqual(-50);
  // });
});

describe('Calculation', () => {
  let currentAge;
  let pastAge;
  let futureAge;
  let calculation;

  beforeEach(() => {
    currentAge = (100)
    pastAge = (50)
    futureAge = (200)
    calculation = new Calculation(currentAge, pastAge, futureAge);
  });

  test('It should create a caculation object with current, past, and future ages.', () => {
    expect(calculation.currentAge).toEqual(100);
    expect(calculation.pastAge).toEqual(50);
    expect(calculation.futureAge).toEqual(200);
  });
});
