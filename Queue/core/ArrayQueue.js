"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.data = [];
    }
    ArrayQueue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    ArrayQueue.prototype.dequeue = function () {
        return this.data.shift();
    };
    ArrayQueue.prototype.peek = function () {
        return this.data[0];
    };
    Object.defineProperty(ArrayQueue.prototype, "size", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    ArrayQueue.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    return ArrayQueue;
}());
exports.default = ArrayQueue;
