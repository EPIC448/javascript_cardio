const { onlyEven, mean, sortByNumber, sortByName, median, mode } = require('./');


describe("onlyEven()", () => {
    it("should filter out odd numbers", () => {
      const array = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10];
  
      const result = onlyEven(array);
  
      expect(result).toEqual([2, 4, 6, 8, 10]);
    });
  });