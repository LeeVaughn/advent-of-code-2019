const puzzleInput = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,6,27,1,9,27,31,1,31,10,35,2,13,35,39,1,39,10,43,1,43,9,47,1,47,13,51,1,51,13,55,2,55,6,59,1,59,5,63,2,10,63,67,1,67,9,71,1,71,13,75,1,6,75,79,1,10,79,83,2,9,83,87,1,87,5,91,2,91,9,95,1,6,95,99,1,99,5,103,2,103,10,107,1,107,6,111,2,9,111,115,2,9,115,119,2,13,119,123,1,123,9,127,1,5,127,131,1,131,2,135,1,135,6,0,99,2,0,14,0"

// calculate what the value of index 0 in the puzzle string should be
function positionZero() {
  // 99 = halt program
  // 1 = add the numbers at the position of the next two numbers and insert them at the position of the third number
  // 1,9,10,3, = add numbers at position 9 and 10 and insert the result at position 3
  // 2 = multiply the numbers at the position of the next two numbers and insert them at the position of the third number
  // 2,3,11,0, = multiply numbers at positions 3 and 11 and insert the result at position 0
  // after move forward four positions

  // convert puzzle input to array
  // loop over puzzle input
    // create variable to track current position in puzzle input array
    // if variable === 1
      // do this
    // else if variable === 2
      // do this
    // else if variable === 99
      // return value of item at index 1

}