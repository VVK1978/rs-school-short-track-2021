// eslint-disable-next-line no-unused-vars
const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.stack = [];
    this.listNode = ListNode(1);
  }

  get size () {
    return this.stack.length;
  }

  enqueue (element) {
    this.stack.push(element);
  }

  dequeue () {
    return this.stack.shift();
  }
}

module.exports = Queue;
