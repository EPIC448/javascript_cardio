const { test, expect } = require('@jest/globals');
const reverseString = require('./index_start');

const index_start = require('./index_start');

test('reverseString function exists', () => {
   expect(reverseString).toBeDefined() 
});

test('String reverses', () => {
    expect(reverseString).toBeDefined()
});

test('string reverses with lowercase', () => {
    expect(reverseString('Hello')).toEqual('olleh')
})
