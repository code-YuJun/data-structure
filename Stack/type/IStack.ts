interface IStack<T> {
  isEmpty(): boolean;
  peek(): T | undefined;
  pop(): T | undefined;
  push(item: T): void;
  size(): number;
  toString():string;
}
export default IStack;