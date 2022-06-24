export class Stack {
    array: any[];
    constructor() {
        this.array = [];
    }

    getStack() {
        return this.array;
    }

    size() {
        return this.array.length;
    }

    push(item: any) {
        this.array.push(item);
    }

    pop() {
        if (this.array.length === 0) {
            throw new Error("스택이 비었습니다.");
        }
        return this.array.pop();
    }
}
