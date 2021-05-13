// Source of INformation on this topic.  https://gist.githubusercontent.com/Giagnus64/daa16a8be6188a8951121d947906acd3/raw/ea296729194c5020ceccebf127e17d94daf4d9ff/singlyLinkedList.js
// Another Great resources  https://visualgo.net/en/list

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
    



} // end of SingleLinked List class


