const {
    onlyEven,
    add,
    isNull,
    checkValue,
    createUser,
    isLess_than_and_greaterThan,
    findUserName,
    asynchronousRequest,
    reverseString, 
    chunkArray,
    isAnagram,
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

 // Arrays
describe("findUserName", () => {
    it("Admin should be in userNames", () => {

         let userNames = ['john', 'Karen', 'admin'];
        
        expect(userNames).toContain('admin')
    })

})


 // WORKING WITH async Data. PROMISE

xdescribe(" Testing Async Data.", () => {
    it("User fetched name should be Leanne Graham", () => {

        expect.assertions(1);
        return asynchronousRequest()
            .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
    })

})

//Asyc await syntax
describe(" Testing Async Data.", () => {
    it("User fetched name should be Leanne Graham", async () => {

        expect.assertions(1);
        const data = await asynchronousRequest();
            expect(data.name).toEqual('Leanne Graham')
        
    })

})

// Test algorithem   + Combine Several Test in one.
describe("ReverseString", () => {

    it("ReverseString function exist ", () => {
            expect(reverseString).toBeDefined();

    })

    
    it("String reverses", () => {
        expect(reverseString('hello')).toEqual('olleh');
    })
})

describe("ChunkArry", () => {

    it('chunkArray function exist', () => {
        expect(chunkArray).toBeDefined();
    })

    it('chunk an array  of 10 values with length of 2', () => {
        const arr = [1,2,3,4,5,6,7,8,9,10]
        const size = 2
        const chunkArr = chunkArray(arr, size)

        expect(chunkArr).toEqual([[1,2,], [3,4], [5,6], [7,8], [9,10]     ]);
    })
})
    

describe("isAnagram", () => {

    it('isAnagram function exist', () => {
        expect(isAnagram).toBeDefined();
    });

    it('isAnagram function exist', () => {
        expect(typeof isAnagram).toEqual('function');
    });

    it(' "cinema" is an anagram of  "iceman" ', () => {
        expect( isAnagram('cinema', 'iceman')).toBeTruthy();
    });

    // last 2 not passing

    it(' "Dormitory" is an anagram of  "dirty room" ', () => {
        expect( isAnagram('Dormitory', 'dirty room')).toBeTruthy();
    });

    it(' "Hello" is an anagram of  "Aloha" ', () => {
        expect( isAnagram('Hello', 'Aloha')).toBeFalsy();
    });


})