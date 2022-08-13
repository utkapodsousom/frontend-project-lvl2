import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../bin/index.js';

const getPath = (file) => path.resolve(process.cwd(), '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');

test('should read file', () => {
  const data = {
    'host': 'hexlet.io',
    'timeout': 50,
    'proxy': '123.234.53.22',
    'follow': false
  };
  const file = readFile('file1.json');
  expect(data).toEqual(JSON.parse(file));
});