function executeFunctions(arrayOfFunctions) {
  return function () {
    return arrayOfFunctions.map((func) => func());
  };
}

// Test Case 1

const addOne = () => 1;
const square = () => 4;
const cube = () => 8;
const testArray = [addOne, square, cube];
const testFunc = executeFunctions(testArray);

console.log(testFunc()); // 1,4,8
