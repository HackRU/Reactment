import {sum} from "../App.jsx";
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'react'
import Jokes from "../components/Jokes.jsx"

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

test('check if likes are registared', async () => {
  render(<Jokes/>)

  fireEvent.click(screen.getByAltText(/Dislike button/i))

  expect(screen.getByRole("jokeCount")).toHaveTextContent('-1')
})