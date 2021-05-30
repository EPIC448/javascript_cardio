import {default as test} from '../codeTest/test.js'

// We use the assert standard library to make assertions
const assert = require('assert')
const { add, subtract } = require('./calculator')

// We do not need to import the test functions since
// they are made global variables by test.js
test('should add two numbers', () => {
        assert.equal(add(1, 2), 3)
})

test('should subtract two numbers', () => {
        assert.equal(subtract(3, 2), 1)
})