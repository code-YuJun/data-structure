export default interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  get size(): number;
  isEmpty(): boolean;
}