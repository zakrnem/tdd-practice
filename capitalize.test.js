import { capitalize } from "./capitalize"

test("Capitalizes a single character string.", () =>
  expect(capitalize("a")).toEqual("A")
)

test("Capitalizes a multiple character string.", () =>
  expect(capitalize("ant")).toEqual("Ant")
)

test("Throws error on non-string input.", () => {
    expect(() => capitalize(123)).toThrow(TypeError);
    expect(() => capitalize(['a', 'b','c'])).toThrow(TypeError);
  })