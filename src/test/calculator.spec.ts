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
});
