import { reverseString } from "./reverseString"

test("Preserves the string if it consists of a single character.", () =>
  expect(reverseString("a")).toEqual("a")
)

test("Reverses a string sucessfully.", () =>
  expect(reverseString("Equally")).toEqual("yllauqE"),
  expect(reverseString("Studying is so fun")).toEqual("nuf os si gniydutS")
)

test("Throws error on non-string input.", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
    expect(() => reverseString(['a', 'b','c'])).toThrow(TypeError);
  })