function generateArray(start, end) {
    // makes the array to store the digits
    let result = [];
  
    // show the direction of the range
    let step = start <= end ? 1 : -1;
  
    // Loop and push each number into the array ggenerated above
    for (let i = start; i !== end + step; i += step) {
      result.push(i);
    }
  
    // restore the generated array
    return result;
  }
  
  // Test the function
  console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
  console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
  