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

    it("pop() : 큐에서 값을 제거하면 가장 먼저 들어왔던 값부터 제거된다.", () => {
        queue.push(1);
        queue.push(2);
        queue.pop();
        expect(queue.getQueue()).toEqual([2]);
    });
});
