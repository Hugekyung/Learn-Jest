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

    it("pop() method를 통해 스택에 마지막으로 등록된 아이템을 제거할 수 있고, 그 값을 반환받는다.", () => {
        stack.push(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
        expect(stack.pop()).toEqual(2);
        expect(stack.getStack()).toEqual([1]);
    });

    it("pop() method를 사용했을 때 스택이 비어있다면, 에러를 반환한다.", () => {
        expect(() => {
            stack.pop();
        }).toThrow("스택이 비었습니다.");
    });
});
