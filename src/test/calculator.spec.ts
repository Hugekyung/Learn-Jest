import { Calculator } from "../calculator";

describe("Calculator TEST", () => {
    it("init calculator - value 0", () => {
        const cal = new Calculator();
        expect(cal.value).toBe(0);
    });
});
