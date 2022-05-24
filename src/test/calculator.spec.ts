import { Calculator } from "../calculator";

describe("Calculator TEST", () => {
    let cal: any;
    beforeEach(() => {
        cal = new Calculator();
    });

    it("init calculator - value 0", () => {
        expect(cal.value).toBe(0);
    });

    it("set number", () => {
        cal.set(3);
        expect(cal.value).toBe(3);
    });

    it("clear - value 0", () => {
        cal.set(1);
        expect(cal.value).toBe(1);
        cal.clear();
        expect(cal.value).toBe(0);
    });

    it("add", () => {
        cal.add(3);
        cal.add(2);
        expect(cal.value).toBe(5);
    });

    it("add - limit 100", () => {
        cal.add(20);
        expect(() => cal.add(100)).toThrow(Error);
    });

    it("subtract", () => {
        cal.subtract(2);
        expect(cal.value).toBe(-2);
    });

    it("multiply", () => {
        cal.add(2);
        cal.multiply(2);
        expect(cal.value).toBe(4);
    });

    it("divide", () => {
        cal.add(9);
        cal.divide(3);
        expect(cal.value).toBe(3);
    });

    it("divide - float", () => {
        cal.add(10);
        cal.divide(3);
        expect(cal.value).toBeGreaterThan(3);
    });
});
