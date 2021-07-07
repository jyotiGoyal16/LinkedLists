//Singly Linked List

//for creating nodes of list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//for constructing singly linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Add data to the end of the list
  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  //insert data at a given index
  insertAt(index, data) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
    } else {
      let newNode = new Node(data);
      let current = this.head;
      let position = 0;

      if (index === 0) {
        newNode.next = current;
        this.head = newNode;
      } else {
        while (position < index - 1) {
          position++;
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
    }
    this.size++;
  }

  //remove data from a given index
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
    } else {
      let current = this.head;
      let previous = current;
      let position = 0;

      if (index === 0) {
        this.head = current.next;
      } else {
        while (position < index) {
          position++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
    }
    this.size--;
  }

  //remove a particular node with the given data
  removeElement(data) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
  }

  //HELPER FUNCTIONS
  
  //get the size of the linked list
  sizeOfList() {
    console.log("list size: ", this.size);
  }

  //get the index of the linked list element
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }
  }

  //check if the list is empty or not
  isEmpty() {
    return this.size === 0;
  }

  //print the contents of a linked list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data + " ");
      current = current.next;
    }
  }
}

export default LinkedList;
