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

    it("큐에 값을 넣으면 큐 배열에 값이 추가된다.", () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.array).toEqual([1, 2, 3]);
    });
});
