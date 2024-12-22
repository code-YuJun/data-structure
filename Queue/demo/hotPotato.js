"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 击鼓传花
var ArrayQueue_1 = require("../core/ArrayQueue");
function hotPotato(names, num) {
    if (!names)
        return;
    var queue = new ArrayQueue_1.default();
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        queue.enqueue(name_1);
    }
    while (queue.size > 1) {
        for (var i = 1; i < num; i++) {
            var name_2 = queue.dequeue();
            if (name_2)
                queue.enqueue(name_2);
        }
        queue.dequeue();
    }
    return queue.dequeue();
}
exports.default = hotPotato;
