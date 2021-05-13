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
    
    



} // end of SingleLinked List class


