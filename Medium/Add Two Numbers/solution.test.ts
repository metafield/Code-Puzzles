import { LinkedList } from "./src/LinkedList/LinkedList"
import { Helpers } from "./src/Helpers"

test("creates a linked number list", () => {
  const num = new LinkedList<number>([1, 2, 3])
  expect(num.getNumber()).toBe(123)
})

test("reverses a number from a linked list", () => {
  const num = new LinkedList<number>([1, 2, 3])
  const reversed = Helpers.reversedNumberFromList(num)
  expect(reversed).toBe(321)
})

test("adds two reversed numbers together", () => {
  const reverse = Helpers.reversedNumberFromList
  const num1 = new LinkedList<number>([2, 4, 3])
  const num2 = new LinkedList<number>([5, 6, 4])
  const result = reverse(num1) + reverse(num2)
  expect(result).toBe(807)
})
