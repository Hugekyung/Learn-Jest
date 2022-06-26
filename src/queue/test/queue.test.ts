import { Queue } from "../queue";

describe("Queue TEST", () => {
    let queue: Queue;
    beforeEach(() => {
        queue = new Queue();
    });

    it("큐를 생성하면 빈 배열로 초기화된다.", () => {
        expect(queue.getQueue()).toEqual([]);
        expect(queue.size()).toBe(0);
    });

    it("push() : 큐에 값을 넣으면 큐 배열에 값이 추가된다.", () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.getQueue()).toEqual([1, 2, 3]);
    });

    it("pop() : 큐에서 값을 제거한다.", () => {
        queue.push(1);
        queue.pop();
        expect(queue.size()).toBe(0);
    });

    it("pop() : 큐에서 값을 제거하면 가장 먼저 들어왔던 값부터 제거된다", () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        expect(queue.pop()).toEqual(1);
        expect(queue.pop()).toEqual(2);
        expect(queue.size()).toBe(2);
    });

    it("pop() Erorr : 큐에 값이 없을 때 pop()을 하면 에러를 발생한다.", () => {
        expect(() => queue.pop()).toThrowError("Error : Empty queue!");
    });
});
