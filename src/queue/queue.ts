export class Queue {
    array: any[];
    constructor() {
        this.array = [];
    }

    getQueue() {
        return this.array;
    }

    size() {
        return this.array.length;
    }

    push(value: any) {
        this.array.push(value);
    }
}
