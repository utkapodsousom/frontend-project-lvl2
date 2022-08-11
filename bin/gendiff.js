#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import process from 'process';
import * as formatData from '../src/formatter.js';

program
  .version('1.0.0')
  .argument('<filepath1>', '')
  .argument('<filepath2>', '')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .action((file1, file2) => {
    console.log(formatData(file1, file2));
  });

const getPath = (file) => path.resolve(process.cwd(), file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');


const compareData = (file1, file2) => {
  const content1 = readFile(file1);
  const content2 = readFile(file2);
  const uniqKeys = _.uniq([...Object.keys(content1), ...Object.keys(content2)]);
  const sortedKeys = _.sortBy(uniqKeys);

  const result = sortedKeys.map((key) => {
    const value1 = content1[key];
    const value2 = content2[key];

    if (!_.has(content2, key)) {
      return {
        type: '-',
        key,
        value: value1
      };
    }
    if (!_.has(content1, key)) {
      return {
        type: '-',
        key,
        value: value2
      }
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: '+',
        key,
        value1,
        value2
      }
    }
    return {
      type: '=',
      key,
      value: value1
    }
  });
  return result;
};

formatData(compareData(file1, file2));