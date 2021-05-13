// Source of INformation on this topic.  https://gist.githubusercontent.com/Giagnus64/daa16a8be6188a8951121d947906acd3/raw/ea296729194c5020ceccebf127e17d94daf4d9ff/singlyLinkedList.js
// Another Great resources  https://visualgo.net/en/list
// How to Invoke new On a Class Object.  https://dmitripavlutin.com/javascript-classes-complete-guide/#:~:text=The%20new%20operator%20instantiates%20the,instance%20of%20the%20User%20class.

//  create A Node. 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}

  /* 3 rules to Follow at this stage

Make sure to increase or decrease the length of the list when adding or removing nodes.
Make sure the list has the correct head, tails, and all nodes have accurate pointers.
When removing, make sure all pointers to removed nodes are severed, to ensure the node is properly deleted from memory
*/



// Create the singly LinkedList Class

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }


    // adds a node at the END of the list
    push(val) {
        //make a new Node
        const newNode = new Node(val);
        //if the list is empty, make node head and tail.
        if (!this.head) {
            this.head = newNode
            this.tail = newNode

            //otherwise add to the end of List
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //increase length by 1
        this.length++;
        //return the list
        return this;

    }

    // adds a node at the START of the list
    unshift(val) {
        //make a new Node
        const newNode = new Node(val);
        //if the list is empty, make node head and tail.
        if (!this.head) {
            this.head = newNode
            this.tail = newNode

            //otherwise add to the START or HEAD of List, 
            //add current head pointer to new head(new node), and make new Node new HEAD
        } else {
            newNode.next = newNode;
            this.head = newNode;
        }
        //increase length by 1
        this.length++;
        //return the list
        return this;

    }



    /*
    Pop and shift
        When we’re removing a node from either side of the list, we’ll need to account for two more things — a list that is left with one
        node (because we’ll need to make sure our tail and head are accurate), and an empty list (so we can avoid runtime errors)
     
     */

    
    // remove the first Item in the list. 

    shift() {
        //if list is empty return  false
        if (!this.head) return false
        //get shifted node
        const shiftNode = this.head;
        //get new head (could be NULL if list is length 2)
        const newHead = this.head.next;
        // if new Head is null, reassign tail to newHead(null)
        if (!newHead) {
            this.tail = newHead;
        }

        //assign new head
        this.head = newHead

        //remove 1 from length
        this.length--;
        return shiftNode;
    }
    

    /*
      To Pop of the list, we need to find the new TAIL. So we use a Helper Method
      "getNodeAtIndex"
      Which return a Node at a giving index
    */
    
    //return  node at a given index
    getNodeAtIndex(index) {
        
        //if the index is not within  the list, return null
        if (index >= this.length || index < 0) return null;

        //iterate through nodes until finding the one at the given index
        let currentNode = this.head;
        let currentIndex = 0
        while (currentIndex !== index) {
            currentNode = currentIndex.next;
            currentIndex++
        }
        return currentIndex
    }

    /*Now we can use POP method to remove the node from the end of the LIST 
     This Function uses a Counter and iterates through the list until we get the index we want, We need the second to the last node, 
     or 
     list length minus two 
   */
    
    //remove node from end of the list
    pop() {
        if (!this.tail) {
            return false;
        }

        //get removed Node
        const poppedNode = this.tail;
        //if list has more than 1 node
        if (this.head !== this.tail) {
            //find new tail
            const newTail = this.getNodeAtIndex(this.length - 2);
            //remove newtail's reference to poppedNode
            newTail.next = null  // becasue it empty
            //make it a new tail
            this.tail = newTail

            //otherwise establish list is empty
        } else {
            this.head = null;
            this.tail = null;
        }
        
        //subtracr 1 from length
        this.length--;
        //return poppedNode
        return poppedNode;
    }



    /*
    Getting and setting
        Since we already implemented the get method above for use in our pop implementation, all we need to do is implement the set method.
        This method finds a node at the specified index, and changes its value to the passed-in variable. 
        It will also use our getter method. We just need to handle the case if the node is not found.
    */
    
    //change node at given index
    setNodeAtIndex(val, index) {
        //find the node using already built method
        const foundNode = this.getNodeAtIndex(index);
        //if the node is not found update and return
        if (foundNode) {
            foundNode.value = val;
            return foundNode;
        }
        //else return null
        return null;
        
    }
    
    /*
    Inserting and removing at an INDEX
        Inserting and removing items from linked lists is made easier by all the previous methods we’ve just written. We’ll need to follow these steps:
        Check if the index exists in the linked list (return false if not).

        If removing/adding at the beginning or end of the list, use the already written methods (no more worrying about the tail/head!).
        Get the nodes before and after the inserted/removed node and assign their pointers properly.
    */

 
    //insert a new Node at the index with Given Value  
    insertAtIndex(index, val) {
        //if index not valid return false
        if (index < 0 || index > this.length) {
            return false;
        }

        //if index is Zero use already built UNSHIFT METHOD
        if (index === 0) {
            return this.unshift(val);
        }
        //if index is at the end of list, use already built PUSH METHOD
        if (index === this.length) {
            return this.push(val);
        }

        //Make a new Node, find the nodes before and after it, Make before's next the new node, and the newNode's next the after

        const newNode = new Node(val);
        const after = this.getNodeAtIndex(index);
        const before = this.getNodeAtIndex(index - 1);
        newNode.next = after;
        before.next = newNode;

        //increase the length 
        this.length++
        return this;
    }

    //  Remove Node at certain INDEX
    removeFrom(index) {
          //if index not valid return false
          if (index < 0 || index > this.length) {
            return false;
          }
        
          //if index is at the beginning use already SHIFT METHOD
          if (index === 0) {
            return this.shift();
        }
        //if index is at the end of list, use already built POP METHOD
        if (index === this.length - 1) {
            return this.pop(val);
        }

        //Get before and after, set before's next to after and remove afters reference from removed Node

        const before = this.getNodeAtIndex(index - 1);
        const removeNode = this.getNodeAtIndex(index);
        before.next = removeNode.next;
        removeNode.next = null;

        //increase the length 
        this.length++
        return removeNode;
    }

    
    

} // end of SingleLinked List class

let node_1 = new Node("onces")
let node_2 = new Node("upon")
let node_3 = new Node("a")
let node_4 = new Node("time")

let testSingle = new SinglyLinkedList(),   //> testSingle.add(node_1)
console.log (
   testSingle
)