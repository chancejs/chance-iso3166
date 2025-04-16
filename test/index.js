const test = require("tape");
// instance with deterministic seed
const chance = require("chance").Chance("seed");

chance.mixin({
  iso3166: require(".."),
});

test("generate country 1", function (t) {
  t.deepEqual(chance.iso3166(), {
    name: "Gambia",
    alpha2: "GM",
    alpha3: "GMB",
    numeric: "270",
  });

  t.end();
});

test("generate country 2", function (t) {
  t.deepEqual(chance.iso3166(), {
    name: "Sudan",
    alpha2: "SD",
    alpha3: "SDN",
    numeric: "729",
  });

  t.end();
});

test("generate country 3", function (t) {
  t.deepEqual(chance.iso3166(), {
    name: "Türkiye",
    alpha2: "TR",
    alpha3: "TUR",
    numeric: "792",
  });

  t.end();
});
