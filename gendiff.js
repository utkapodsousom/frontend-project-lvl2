const { Command, Option } = require('commander');
const program = new Command();

program.argument('<filepath1>', '').argument('<filepath2>', '');

program
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format');

program.parse();