import ILinkedList from "../type/ILinkedList";
class Node<T>{
    value: T
    next: Node<T> | null
    constructor(value: T){
        this.value = value
    }
}
class LinkedList<T> implements ILinkedList<T>{
    private head: Node<T> | null = null
    private size: number = 0
    get length(): number {
        return this.size
    }
    append(item: T): void {
        const node = new Node(item)
        if(!this.head){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    print(): void {
        const values: T[] = []
        let current = this.head
        while(current){
            values.push(current.value)
            current = current.next
        }
        console.log(values.join("->"))
    }
    insert(position: number, item: T): boolean {
        if(position < 0 || position > this.size) return false
        if(position === 0){
            const node = new Node(item)
            node.next = this.head
            this.head = node
            this.size++
            return true
        }
        let current = this.head
        let previous: Node<T> | null = null // 要找的节点的前一个节点
        let index = 0
        while(index++ < position){
            previous = current
            current = current!.next
        }
        const node = new Node(item)
        node.next = current
        previous!.next = node
        this.size++
        return true
    }
    removeAt(position: number): T | undefined {
        if(position < 0 || position >= this.size) return
        if(position === 0){
            const current = this.head
            this.head = current!.next
            this.size--
            return current!.value
        }
        let current = this.head
        let previous: Node<T> | null = null
        let index = 0
        while(index++ < position){
            previous = current
            current = current!.next
        }
        previous!.next = current!.next
        this.size--
        return current!.value
    }
    get(position: number): T | undefined {
        if(position < 0 || position >= this.size) return
        let current = this.head
        let count = 0
        while(count++ < position){
            current = current!.next
        }
        return current!.value
    }
}
export default LinkedList
