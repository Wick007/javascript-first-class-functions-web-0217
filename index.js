function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function test() {
    return "hey"
  }
}

function returnsAnAnonymousFunction() {
  return function(){}
}
