//function to find nth node from the end of the list

//Brute force- Time complexity O(n^2) Space complexity O(1)
export function findNthNodeFromEnd(head, n) {
  let current = head;
  let temp = null;
  let counter = 0;
  while (current.data) {
    temp = current;
    counter = 0;
    while (temp.next !== null) {
      counter++;
      temp = temp.next;
    }
    if (counter < n - 1) {
      console.log("Fewer nodes in the list");
      return;
    } else if (counter > n - 1) {
      current = current.next;
    } else {
      console.log("Nth node from end is: ", current.data);
      return;
    }
  }
}

//Using hash table- Time & space complexity O(listSize)
export function findNthNodeFromEnd2(head, listSize, n) {
  if (n > listSize) {
    console.log("Fewer elements in the list");
    return;
  }

  let map = new Map();
  let current = head;
  let index = 1;

  while (current !== null) {
    if (!map.has(current)) {
      map.set(index, current);
      current = current.next;
      index = index + 1;
    }
  }
  let nthNodeIndex = listSize - n + 1;
  let nthNode = map.get(nthNodeIndex);
  console.log("Nth node from end is:", nthNode.data);
}

/* Without using hash table
Time complexity here is O(n) for finding (listSize - n + 1)th node from start
If we had to use another while loop to find the length of the list then time complexity would be 
T(n) = time to find length of list + time to find (listSize-n+1)th node from beginning
if listSize = m, then T(n) = O(m) + O(m-n+1) => T(n) = O(m) + O(m) => O(m)

Space complexity O(1) as no hash table used
*/
export function findNthNodeFromEnd3(head, listSize, n) {
  if (n > listSize) {
    console.log("Fewer elements in the list");
    return;
  }

  let current = head;
  let nthNodeIndex = listSize - n + 1;
  let index = 1;

  while (index < nthNodeIndex) {
    index = index + 1;
    current = current.next;
  }

  console.log("Nth node from end is: ", current.data);
}

//Using one scan and two pointers- use two pointers, say p1 and p2. Both points to head initially
//p2 only starts moving after p1 made n moves. From there both pointers move forward until p1 points to end of the list.
//As a result p2 points to nth node from the end of the list.

//Time complexity- O(n) Space complexity O(1)

export function findNthNodeFromEnd4(head, n) {
  let pointer1 = head;
  let pointer2 = head;
  let count = 0;

  while (count < n && pointer1) {
    pointer1 = pointer1.next;
    count++;
  }

  while (pointer1 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  if (count === n) {
    console.log("Nth node from end is: ", pointer2.data);
  } else {
    console.log("Fewer elements in the list");
  }
}
