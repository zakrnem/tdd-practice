import { capitalize } from "./capitalize"

test("Capitalizes a single character string", () =>
  expect(capitalize("a")).toEqual("A")
)
