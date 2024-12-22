import ArrayStack from "../core/ArrayStack";
function decimalToBinary(decimal: number): string[] {
    const stack = new ArrayStack<number>();
    while (decimal > 0) {
        stack.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return stack.toString().split(',').reverse();
}

export default decimalToBinary;