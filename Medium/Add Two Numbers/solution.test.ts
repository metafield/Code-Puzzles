import { LinkedList } from "./src/LinkedList/LinkedList"

test("creates a linked number list", () => {
  const num = new LinkedList()
  num.push(1)
  num.push(2)
  num.push(3)

  expect(num.getNumber()).toBe(123)
})
