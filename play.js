const {connect} = require('./client')

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  
  stdin.on("data", handleUserInput);
  
  
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); 
  }
  if (key === '\u001B\u005B\u0041'){
    console.log('Move: up')
  }
  if (key === '\u001B\u005B\u0043'){
    console.log('Move: right')
  }
  if (key === '\u001B\u005B\u0042'){
    console.log('Move: down')
  }
  if (key === '\u001B\u005B\u0044'){
    console.log('Move: left')
  }
};

setupInput()