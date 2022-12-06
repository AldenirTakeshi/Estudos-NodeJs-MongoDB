const process = require("process");

// console.log(process.argv);
// process.stdout.write("Qual é o seu nome ? ");
process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Texto do Usário: ${keyboard}`);
  process.exit();
});
