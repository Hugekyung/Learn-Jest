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

    pop() {
        if (this.array.length === 0) {
            throw new Error("Queue is empty");
        }
        return this.array.pop();
    }

    popleft() {
        if (this.array.length === 0) {
            throw new Error("Error : Empty queue!");
        }
        const removed_value = this.array[0];
        this.array = this.array.slice(1, this.array.length);
        return removed_value;
    }
}
