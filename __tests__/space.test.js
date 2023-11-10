import Age from "./../src/js/space.js";

describe('Age', () => {
  test('It should create a age object with earth years.', () => {
    const age = new Age(30);
    expect(age.earth).toEqual(30);
  });
});