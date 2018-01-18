#!/usr/bin/env node

const yargs = require('yargs')

yargs
  .usage('')
  .usage('   Javascript fundamentals examples')
  .usage('   ================================')
  .usage('')
  .usage('See ./README.md for detailed description')
  .help(false)

yargs.showHelp()
