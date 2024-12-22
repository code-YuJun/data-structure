import IQueue from "../type/IQueue";
class ArrayQueue<T> implements IQueue<T> {
    private data: T[] = [];
    enqueue(item: T): void {
        this.data.push(item);
    }
    dequeue(): T | undefined {
        return this.data.shift();
    }
    peek(): T | undefined {
        return this.data[0];
    }
    get size(): number {
        return this.data.length;
    }
    isEmpty(): boolean {
        return this.data.length === 0;
    }
}
export default ArrayQueue;