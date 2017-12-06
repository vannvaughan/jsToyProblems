//Given an array of numbers, find if the sum off all numbers is odd or even.

function oddOrEven(arr) {
  let sum = 0
  for( var i=0; i < arr.length; i++ ){
    sum += arr[i]
  }
  return sum % 2 === 0 ? "even" : "odd"
}