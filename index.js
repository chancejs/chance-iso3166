const allCountries = require('./all.json');

module.exports = function iso3166 (options) {
  const country = this.pickone(allCountries);

  // expose our structure
  return {
    name: country.name,
    alpha2: country['alpha-2'],
    alpha3: country['alpha-3'],
    numeric: country['country-code']
  };
};
