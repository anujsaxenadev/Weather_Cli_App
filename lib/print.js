const chalk = require('chalk');

const printError = (error) => {
    console.error(chalk.yellow(error.message));
    process.exit(1);
}

const printReport = (report) => {
    console.log(chalk.green(report));
}

module.exports = {
    error: printError,
    report: printReport
}