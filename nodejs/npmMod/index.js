const chalk = require('chalk');
const { default: validator } = require('validator');

console.log(chalk.blue.bold("Mihir Verma"))

const res = validator .isEmail("mihir@gmail.com")

console.log(res?(chalk.green(res)):(chalk.red(res)))