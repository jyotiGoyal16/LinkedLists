//Using hashing- Time and space complexity O(n)
export function detectLoop(head) {
  let map = new Set();
  let current = head;
  while (current) {
    if (map.has(current)) {
      console.log("Loop detected in list");
      return;
    }

    map.add(current);
    current = current.next;
  }
  console.log("No loop detected");
}

/*
Using Floyd cycle finding algorithm- Memory efficient approach

Use two pointers, one pointer is faster than the other i.e. if P1 moves 1 node ahead
then P2 will move 2 nodes ahead. Once these two pointers enter the loop, the are expected
to meet which denotes that there is a loop

Time complexity O(n) Space complexity O(1)
*/

export function efficientDetectLoop(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (slowPtr && fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      console.log("Loop detected in the list");
      return;
    }
  }
  console.log("No Loop detected");
}
