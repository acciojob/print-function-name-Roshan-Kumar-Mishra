//your JS code here. If required.
function printMyName() {
  console.log(arguments.callee.name);
}

// Call the function
printMyName();
