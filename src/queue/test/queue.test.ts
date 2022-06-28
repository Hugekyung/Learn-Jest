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

    it("pop() : 큐에서 맨 마지막 값(일반적인 배열에서의 pop)을 제거한다.", () => {
        queue.push(1);
        queue.pop();
        expect(queue.size()).toBe(0);
    });

    it("popleft() : 큐에서 값을 제거하면 가장 먼저 들어왔던 값부터 제거된다", () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        expect(queue.popleft()).toEqual(1);
        expect(queue.popleft()).toEqual(2);
        expect(queue.size()).toBe(2);
    });

    describe("pop(), popleft() Erorr TEST", () => {
        it("popleft() Erorr : 큐에 값이 없을 때 popleft()을 하면 에러를 발생한다.", () => {
            expect(() => queue.popleft()).toThrowError("Error : Empty queue!");
        });

        it("pop() Erorr : 큐에 값이 없을 때 pop()을 하면 에러를 발생한다.", () => {
            expect(() => queue.pop()).toThrowError("Queue is empty");
        });
    });
});
