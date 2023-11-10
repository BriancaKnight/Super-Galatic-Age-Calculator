import Age from "../src/js/space.js";

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
    expect(newAge.mercury()).toEqual(24);
  });

  test('It should create a venus prototype to return age in Venus years.', () => {
    expect(newAge.venus()).toEqual(62)
  });

  test('It should create a mars prototype to return age in Mars years.', () => {
    expect(newAge.mars()).toEqual(188)
  });

  test('It should create a jupiter prototype to return age in Jupiter years', () => {
    expect(newAge.jupiter()).toEqual(1186)
  });

  test('It should create a prototype to find years between two ages', () => {
    expect(newAge.calculate(otherAge.earth)).toEqual(50);
  });
});
