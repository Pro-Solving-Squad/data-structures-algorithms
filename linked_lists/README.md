# Linked Lists

## Classic/Singly linked list

- Unlike an array, the items in the linked list are stored in random memory locations.
- Each item in a linked list is a node
- A node contains the value of the linked list and a pointer to the next node

### Important to note

1. linked list’s fist item is called a head
2. The last item of a linked list is called the tail
3. The tail points to null since that’s the last item of the list

### The implementation

1. Create the Node class for the node attributes
   1. node needs the value, and
   2. the pointer to the next node (a link)
2. Create the linked-list class for storing all the nodes
   1. linked list needs the head attribute so it knows what the first node is
   2. This class can then have methods that allows us to modify the list
      1. access a node’s value (read)
      2. search a node’s index by value (search)
      3. Insert a node to a linked list (insert)
      4. delete a node from the listt (delete)

### Exercises

1. Write a function that reverses a linked list (e.g. if the list is 1 → 2 → 3, then the resulting linked list should be 3 → 2 → 1
2. Write a function that will retrive the last node of the list
3. Having access to the node at the middle of a linked list but no access to the nodes that precedes it, how can you remove this node and ensure that the rest of the linked list remain intact?
