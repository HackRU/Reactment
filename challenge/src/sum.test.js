import { sum } from "../src/App";

test('adds the first 10 whole numbers', () => {
    expect(sum([1,2,3,4,5,6,7,8,9,10])).toBe(55);
});

test('adds the first 100 whole numbers', () => {
    const nums = [...Array(100)].map((_, i) => i + 1);
    expect(sum(nums)).toBe((100 * 101) / 2);
});

test('adds the first 100 whole numbers in reverse', () => {
    const nums = [...Array(100)].map((_, i) => i + 1).reverse();
    expect(sum(nums)).toBe((100 * 101) / 2);
});
