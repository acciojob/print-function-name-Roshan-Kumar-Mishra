//your JS code here. If required.
function printMyName() {
  alert(arguments.callee.name);
}

// Call the function
printMyName();
