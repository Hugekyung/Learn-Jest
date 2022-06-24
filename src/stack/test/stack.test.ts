import { Stack } from "../stack";

describe("Stack TEST", () => {
    let stack: Stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it("스택을 생성하면 빈 배열로 초기화된다.", () => {
        expect(stack.size()).toBe(0);
        expect(stack.getStack()).toEqual([]);
    });

    it("push() method를 통해 스택에 아이템을 추가할 수 있다.", () => {
        stack.push(2);
        expect(stack.size()).toBe(1);
        expect(stack.getStack()).toEqual([2]);
    });
});
