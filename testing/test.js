const {
  getAllPlaces,
  getPlacesByType,
  getPlacesByName,
} = require("../src/models/placeModel");

test("Obtener todos los lugares", () => {
  expect(getAllPlaces()).toBeDefined();
});

test('Obtener lugares por tipo "Restaurante"', () => {
  expect(getPlacesByType("Restaurante")).toBeDefined();
});

test('Obtener lugares por nombre "Negocio 1"', () => {
  expect(getPlacesByName(undefined, "Negocio 1")).toBeDefined();
});
