import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../bin/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (file) => path.resolve(process.cwd(), __dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');
const file1 = getPath('file1.json');
const file2 = getPath('file2.json');
const testData = readFile('correct.txt');

test('should output certain data', () => {
  expect(genDiff(file1, file2)).toBe(testData);
});
