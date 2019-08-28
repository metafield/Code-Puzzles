import { LinkedList } from "./LinkedList/LinkedList"

export class Helpers {
  static reversedNumberFromList(list: LinkedList<number>): number {
    let number = list.getNumber()
    let reverse = 0
    let lastDigit: number

    while (number > 0) {
      lastDigit = number % 10
      reverse = reverse * 10 + lastDigit
      number = ~~(number / 10)
      console.log(reverse)
    }

    return reverse
  }
}
