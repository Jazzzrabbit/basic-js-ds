const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let temp = null;
  let result = null;
  
  while (l) {   
    if (l.value == k) {
      if (l.next) l = l.next;
    }
      
    if (l.value != k) temp = {value: l.value, next: temp};
    
    l = l.next;  
  }

  while (temp) {
    if (temp.value != k) result = {value: temp.value, next: result};  
    temp = temp.next;
  }

  return result;
}

module.exports = {
  removeKFromList
};

