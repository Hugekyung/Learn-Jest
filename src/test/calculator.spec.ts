import { Calculator } from "../calculator";

describe("Calculator TEST", () => {
    let cal: { value: number; set: (arg0: number) => void };
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
});
