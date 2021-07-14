import LinkedList from "./SSL";
import { 
  findNthNodeFromEnd, 
  findNthNodeFromEnd2, 
  findNthNodeFromEnd3,
  findNthNodeFromEnd4
} from "./findNthNodeFromEnd";
import {detectLoop, efficientDetectLoop} from "./detectLoopInList";
import {findLoopStartingNode} from "./findLoopStartNode";
import {findLoopLength} from "./findLoopLength";

let list = new LinkedList(); // e.g 1 --> 2 --> 3 --> 4 --> 5 --> 6
console.log("isEmptyList:", list.isEmpty());
list.add(1);
list.add(2);
list.add(4);

// 1 --> 2 --> 4

list.insertAt(1, 6); //1 6 2 4
list.insertAt(2, 3); // 1 6 3 2 4
list.insertAt(5, 5); // 1 6 3 2 4 5

// 1 --> 6 --> 3 --> 2 --> 4 --> 5

list.add(7);
list.add(8);
list.add(9);

// 1 --> 6 --> 3 --> 2 --> 4 --> 5 --> 7 --> 8 --> 9

console.log("isEmptyList:", list.isEmpty());

list.removeFrom(4); // 1 6 3 2 5 7 8 9
list.removeFrom(7); // 1 6 3 2 5 7 8
list.removeFrom(0); // 6 3 2 5 7 8
list.insertAt(0, 1); // 1 6 3 2 5 7 8

console.log("Index of element 2:", list.indexOf(2));
list.removeElement(5); // 1 6 3 2 7 8
list.printList();
list.sizeOfList();

//find nth node from end of the list
findNthNodeFromEnd4(list.head, 2);
efficientDetectLoop(list.head); //create a loop in the list for checking this
findLoopStartingNode(list.head);
findLoopLength(list.head);
