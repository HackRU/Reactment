import {sum} from "../App.jsx";

describe("sum",()=>{
  test("Sums an array correctly",()=>{
    expect(sum([0,1,2,3,0])).toBe(6);
    expect(sum([0,0,0,0,1])).toBe(1);
    expect(sum([5,5,5,5])).toBe(20);
  })
  test("Handles an empty array input",()=>{
    expect(sum([])).toBe(0);
  })
})