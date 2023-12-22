const os = require('node:os')

console.log("\nOperative System")
console.log(os.platform(), os.release(), os.arch(), "\n")
console.log("Processors:")
console.log(os.cpus())