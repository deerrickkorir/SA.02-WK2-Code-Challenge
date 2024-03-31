function isPrime(num) {
    if (num <= 1) return false;
    // Numbers that are always less than/equal to the 1 are not prime numbers
    if (num <= 3) return true;
    // excude the numbers 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false;
     // Numbers divisible by the excuded numbers 2 or 3 are not prime numbers
     // Check divisibility by numbers up to the square root of the number
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;// when divisible by any number in the scale, not prime
      }
    }
    return true;//when not divisible by any number in the scale, it is probably prime
  }
  
  function filterPrimeNumbers(arr) {
    return arr.filter(isPrime);
  }
  // Test the function
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filterPrimeNumbers(inputArray));
  