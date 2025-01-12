import { calculatorService } from "./testservice";

describe('testservice', () => {
  it('should work', () => {
    const testservice = new calculatorService();
    expect(testservice.add(2,4)).toEqual(6);
  });

  it('should work', () => {
    const testservice = new calculatorService();
    expect(testservice.subtract(2,4)).toEqual(6);
  });
});