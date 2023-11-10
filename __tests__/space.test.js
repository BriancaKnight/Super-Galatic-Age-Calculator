import Age from "./../src/js/space.js";

describe('Age', () => {
  let newAge;

  beforeEach(() => {
    newAge = new Age(100);
  });

  test('It should create a age object with earth years.', () => {
    expect(newAge.earth).toEqual(100);
  });

  test('It should create a Merecury prototype to return age in Mercury years.', () => {
    expect(newAge.mercury()).toEqual(24);
  })

  test('It shoule create a Venus prototype to return age in Venus years.', () => {
    expect(newAge.venus()).toEqual(62)
  })
});