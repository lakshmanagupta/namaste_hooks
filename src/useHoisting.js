const UseHoisting = () => {
  /*
In the hoisting the below will happen when we try to access

let - referrence error - cannot access before initialization
const - referrence error - cannot access before initialization
var - undefined because already as part of memory phase it is allocated with value undefined

let,cont - arrow function -  referrence error - cannot access before initialization
var - arrow function - since var values will be stored as variables in memory so stored as undefined but if you try accessing it as x() then it will throw error as not a function
  */

  console.log("printing the value of a-var", a);
  // console.log("printing the value of b- let", b);
  //   console.log("printing the value of c- const", c);
  console.log("printing the value of function add-using function keyword", add(3));
  // console.log("printing the value of function add-using function keyword", subtract(3));
  // console.log("printing the value of function multiply-using arrow function", multiply);

  //let us first create a variable and function now
  var a = 2;
  let b = 9;
  const c = 10;

  function add(num) {
    console.log(a);

    var sum = num + 1;
    return sum;
  }
  var subtract = (num) => {
    var sum = num - 1;
    return sum;
  };

  const multiply = (num) => {
    var sum = num + 1;
    return sum;
  };
  console.log(add(2));

  multiply(2);
};
export default UseHoisting;
