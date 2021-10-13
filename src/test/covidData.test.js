import reducer, { addCountry } from '../redux/covidData/covidDatas';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    countries: [],
    totalConfirmed: 0,
  });
});

test("should handle a country's data being added to the store", () => {
  const previousState = {
    countries: [],
    totalConfirmed: 0,
  };

  const newState = reducer(
    previousState,
    addCountry({
      name: 'South Africa',
      id: 'SouthAfrica',
      total_confirmed: 50,
    })
  );

  expect(newState).toEqual({
    countries: [
      {
        name: 'South Africa',
        id: 'SouthAfrica',
        total_confirmed: 50,
      },
    ],
    totalConfirmed: 0,
  });
});
