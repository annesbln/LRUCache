'use strict';

function LRUCache(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.storage = new Map();
    this.counts = new Map(); // counts of the usage of the items
}

LRUCache.prototype.cache = function (key, value) {
    let isAdditionalItem = !this.storage.has(key);

    if (isAdditionalItem) {
        this.size++;
        this.checkCapacity();
    }
    this.storage.set(key, value);

    if (this.counts.has(key)) {
        this.counts.set(key, counts.value(key)++);
    } else {
        this.counts.set(key, 1);
    }
    
    return this.storage;
}
LRUCache.prototype.checkCapacity = function () {
    if (this.capacity == this.size) {
        let key = getLeastRecentlyUsed();
        this.delete(key);
    }
}
LRUCache.prototype.getLeastRecentlyUsed = function () {

}
LRUCache.prototype.delete = function (key) {
    this.storage.delete(key);

    let count = this.counts.get(key);

    if (this.counts.has(key) && count > 1) {
        count--;
        this.counts.set(key, count);
    } else {
        this.counts.delete(key);
    }
}
LRUCache.prototype.size = function () {
    return this.storage.size(); // throws error!?
}

let capacity = 3;
var store = new LRUCache(capacity);
