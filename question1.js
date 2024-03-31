function swapCase(inputString) {
    // enables string to hold results
    let swappedString = '';
  
    for (let i = 0; i < inputString.length; i++) {
      // sees if the character is capital letters(uppercase)
      if (inputString[i] === inputString[i].toUpperCase()) {
        // If is in capital letters(uppercase), convert it to lowercase and displays to the outcome
        swappedString += inputString[i].toLowerCase();
      } else {
        // If lowercase, convert it to uppercase and display to the outcome
        swappedString += inputString[i].toUpperCase();
      }
    }
  
    // replaces the swapped string
    return swappedString;
  }
  
  // Test the function if it works
  console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'
  