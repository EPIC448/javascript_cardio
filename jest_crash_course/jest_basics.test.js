const {
    onlyEven,
    add,
    isNull,
    checkValue,
    createUser,
    isLess_than_and_greaterThan,
} = require('./');


describe("onlyEven()", () => {
    it("should filter out odd numbers", () => {
      const array = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10];
  
      const result = onlyEven(array);
  
      expect(result).toEqual([2, 4, 6, 8, 10]);
    });
});

describe("add()", () => {
    it("add 2 + 2 to equal 4", () => {
        const result = add(2 ,2)
        
        expect(result).toBe(4)
  })
});
  
describe("add()", () => {
    it("add 2 + 2 to NOT equal 4", () => {
        const result = add(2 ,2)
        
        expect(result).not.toBe(5);
  })
});

describe("isNull()", () => {
    it("Should be null", () => {
        const result = isNull()
        
        expect(result).toBeNull();
  })
});

describe("CheckValue()", () => {
    it("Should be Falsey", () => {
        
        expect(checkValue()).toBeFalsy();
  })
});

describe("createUser()", () => {
    it("User should be Brad Traversy", () => {
        
        expect(createUser()).toEqual({
    //formate like this beCuz isArray
            firstName: "Brad",
            lastName: "Traversy",
        });
  })
});

//we put the logic for this function one in this file. so it not in 
//regular JS file
describe("isLess_than_and_greaterThan()", () => {
    it("Should be under 1600", () => {
        
        const load1 = 800;
         const load2 = 700
        expect(load1 + load2).toBeLessThan(1600);
  })
});


//regex
describe("There is no I in team", () => {
    it("No I in team", () => {
        expect("team").not.toMatch(/I/i)
    })
})