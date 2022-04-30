//const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(chalk.blue('happy u'))

//console.log(validator.isURL('https://read.io'))
//console.log(validator.isEmail('saumya@example.com'))