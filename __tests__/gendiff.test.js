import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getAbsolutePath = (file) => path.join(process.cwd(), '__fixtures__', file);
const readFile = (file) => readFileSync(getAbsolutePath(file), 'utf-8');

const testTable = [
  { file1: 'file1.json', file2: 'file2.json', type: 'JSON' },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'stylish', type: 'YAML',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'plain', type: 'JSON',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'plain', type: 'YAML',
  },
  {
    file1: 'file1.json', file2: 'file2.json', format: 'json', type: 'JSON',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', format: 'json', type: 'YAML',
  },
];

test.each(testTable)('should output $format format from $type data', ({ file1, file2, format = 'stylish' }) => {
  expect(genDiff(getAbsolutePath(file1), getAbsolutePath(file2), format)).toBe(readFile(`correct-${format}.txt`));
});
