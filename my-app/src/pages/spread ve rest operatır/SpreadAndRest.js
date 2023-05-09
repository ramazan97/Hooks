
import React from "react";
// spread -> ...  (objeyi yada diziyi yay demek)
const SpreadAndRest = () => {
// SPREAD
  const parts = ["shoulders", "knees"];
  const lyrics = ["head", ...parts, "and", "toes"];
  //  ["head", "shoulders", "knees", "and", "toes"]
  const dateFields = [1970, 0, 1]; // 1 Jan 1970
  const d = new Date(...dateFields);
  const arr = [1, 2, 3];
  const arr2 = [...arr]; // like arr.slice()
  arr2.push(4);
  //  arr2 becomes [1, 2, 3, 4]
  //  arr remains unaffected
//   REST
  function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  myFun("one", "two", "three", "four", "five", "six");
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]
  function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  const arr3 = multiply(2, 15, 25, 42);
  console.log(arr3); // [30, 50, 84]
  function sortRestArgs(...theArgs) {
    const sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7
  function sortArguments() {
    const sortedArgs = arguments.sort();
    return sortedArgs; // this will never happen
  }
  console.log(sortArguments(5, 3, 7, 1));
  // throws a TypeError (arguments.sort is not a function)
  return (<div>
    {/* <h1>{arr}</h1> */}
    SpreadAndRest</div>)
};
export default SpreadAndRest;