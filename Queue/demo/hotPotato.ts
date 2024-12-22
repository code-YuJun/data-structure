// 击鼓传花
import ArrayQueue from "../core/ArrayQueue";
function hotPotato(names: string[], num: number): string | undefined {
    if(!names) return;
    const queue = new ArrayQueue<string>();
    for (const name of names) {
        queue.enqueue(name);
    }
    while (queue.size > 1) {
        for (let i = 1; i < num; i++) {
            const name = queue.dequeue();
            if(name) queue.enqueue(name);
        }
        queue.dequeue();
    }
    return queue.dequeue();
}

export default hotPotato;