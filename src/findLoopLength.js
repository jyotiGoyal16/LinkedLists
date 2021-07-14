/* Find the length of the loop, if loop exists

Extension to Floyd cycle finding algorithm
After finding loop, keep the slowPtr as it is and fastPtr keeps moving one node at
a time until it reaches slowPtr. While moving fastPtr, use a counter to count the nodes in the loop
one node at a time

Time complexity O(n) Space complexity O(1)
*/

export function findLoopLength(head) {
  let slowPtr = head;
  let fastPtr = head;
  let doesLoopExists = false;

  while (slowPtr && fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      doesLoopExists = true;
      break;
    }
  }

  if (doesLoopExists) {
    fastPtr = fastPtr.next;
    let lengthCounter = 0;
    while (slowPtr !== fastPtr) {
      fastPtr = fastPtr.next;
      lengthCounter++;
    }
    console.log("Length of the loop is: ", lengthCounter + 1);
    return;
  }
  console.log("No loop detected");
}
