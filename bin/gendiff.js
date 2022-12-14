#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('1.0.0')
  .argument('<filepath1>', '')
  .argument('<filepath2>', '')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((file1, file2, options) => {
    console.log(genDiff(file1, file2, options.format));
  });

program.parse();
