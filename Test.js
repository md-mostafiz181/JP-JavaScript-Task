// Task 01
function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

console.log(reverseString("This is Mostafizur Rahman"));

// Task 02

function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

  console.log(sumOfPositiveNumbers([1,2,3,4,5,-3]));

// Task 03

function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  const elementCount = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    elementCount[element] = (elementCount[element] || 0) + 1;

    if (elementCount[element] > maxFrequency) {
      maxFrequency = elementCount[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

  console.log(findMostFrequentElement([1,2,3,4,5,6,3,3]));

// Task-05

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator.";
  }
}

console.log(calculate(10, 10, "+"));
