
/* Find the starting point of the loop, if loop exists

Extension to Floyd cycle finding algorithm
After finding loop, initialize the slowPtr to head and start moving slowPtr and fastPtr
one node at a time. The point at which both pointers meet is the start of the loop

Time complexity O(n) Space complexity O(1)
*/

export function findLoopStartingNode(head) {
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
    slowPtr = head;
    while (slowPtr !== fastPtr) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }
    console.log("Start node of the loop is: ", slowPtr);
    return;
  }
  console.log("No loop detected");
}
