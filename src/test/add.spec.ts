import { add } from "../add";

describe("Test add function", () => {
    it("Add - success", () => {
        expect(add(2, 3)).toBe(5);
    });

    it("Add - fail", () => {
        expect(add(2, 2)).not.toBe(5);
    });
});
