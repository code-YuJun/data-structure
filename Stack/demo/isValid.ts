import ArrayStack from "../core/ArrayStack";
// 有效括号
function isValid(s: string): boolean {
    const stack = new ArrayStack<string>();
    for (const char of s) {
        switch (char) {
            case "(":
                stack.push(')')
                break;
            case "[":
                stack.push(']')
                break;
            case "{":
                stack.push('}')
                break;
            default:
                if (stack.isEmpty() || stack.pop() !== char)
                    return false;
                break;
        }
    }
    return stack.isEmpty();
}

export default isValid;