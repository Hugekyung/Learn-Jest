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
}