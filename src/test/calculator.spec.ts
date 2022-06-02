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

    describe("add", () => {
        it("add", () => {
            cal.add(3);
            cal.add(2);
            expect(cal.value).toBe(5);
        });

        it("add Error - limit 100", () => {
            cal.add(20);
            expect(() => cal.add(100)).toThrow(
                "Value can not be greater than 100"
            );
        });
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

    describe("divides", () => {
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

        it("0 / 0 === NaN", () => {
            cal.divide(0);
            expect(cal.value).toBeNaN();
        });

        it("1 / 0 === Infinity", () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });
    });
});
