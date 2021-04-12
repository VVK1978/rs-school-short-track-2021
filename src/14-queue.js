// const ListNode = require('../extensions/list-node');
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
const array = [];

class Queue {
  get size () {
    return array.length;
  }

  enqueue (element) {
    // eslint-disable-next-line no-console
    array.unshift(element);
  }

  dequeue () {
    return array.pop();
  }
}

module.exports = Queue;
