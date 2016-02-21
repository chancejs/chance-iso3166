const test = require('tape');
const Chance = require('chance');
const chance = new Chance('seed');

chance.mixin({
  iso3166: require('..')
});

test('generate country 1', function (t) {
  t.deepEqual(chance.iso3166(), {
    name: 'Georgia',
    alpha2: 'GE',
    alpha3: 'GEO',
    numeric: '268'
  });

  t.end();
});

test('generate country 2', function (t) {
  t.deepEqual(chance.iso3166(), {
    name: 'Suriname',
    alpha2: 'SR',
    alpha3: 'SUR',
    numeric: '740'
  });

  t.end();
});

test('generate country 3', function (t) {
  t.deepEqual(chance.iso3166(), {
    name: 'Turkey',
    alpha2: 'TR',
    alpha3: 'TUR',
    numeric: '792'
  });

  t.end();
});
