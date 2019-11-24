'use strict';

function LRUCache(capacity, { key: currentKey, value: currentValue }) {
    this.capacity = capacity;
    this.size = node ? 1 : 0;
    this.head = node ? node : undefined;
    this.tail = node ? node : undefined;
    this.key = currentKey ? this.head.data[key] : undefined;
}

function Node(itemKey, itemValue) {
    this.data = { key: itemKey, value: itemValue };
    this.previous = undefined;
    this.next = undefined;
}

LRUCache.prototype.add = function (key, value) {
    this.checkCapacity();

    var node = new Node(key, value);
    if (this.size) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this.size++;
    return node;
}

LRUCache.prototype.searchNodeAt = function (position) {
    var currentNode = this.head,
        length = this.size,
        count = 1,
        message = { error: 'Error: This node doesn\'t exist.' };

    if (length == 0 || position < 1 || position > length) {
        throw new Error(message.error);
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
    }
    return currentNode;
}

LRUCache.prototype.remove = function (position) {
    var node = this.searchNodeAt(position);

    if (node.previous) {
        node.previous.next = node.next;
    } else {
        this.head = node.next;
    }

    if (node.next) {
        node.next.previous = node.previous;
    } else {
        this.tail = node.previous;
    }

    this.size--;
    return node;
};

LRUCache.prototype.checkCapacity = function () {
    if (this.capacity == this.size) {
        var nodeToDelete = this.searchNodeAt(this.size);
        this.remove(nodeToDelete);
    }
}

LRUCache.prototype.size = function () {
    return this.storage.size;
}
debugger;
console.log("HellO");
let capacity = 3;

var store = new LRUCache(capacity, { key: a, value: 1 }); // Optional initial values for cache
store.size; // should be 1
store.capacity; // should be 3
store.a; // should be 1;
store.cache('b', 2)['b']; // should be 2
store.a = 5;
store.a; // should be 5
store.cache('c', 3).cache('d', 4).b; // should be undefined, since 'b' was removed because it was the least recently used
store.delete('d');
store.d; // should be undefined, since 'd' was deleted
store.size; // should be 2
store.cache('c', 4);
store.c; // should be 4
store.capacity = 1; // should resize the store to have just one element
Object.keys(store); // should be ['c']