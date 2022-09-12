import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../bin/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (file) => path.resolve(process.cwd(), __dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');
const testData = readFile('correct.txt');

test('should process JSON data', () => {
  expect(genDiff('file1.json', 'file2.json')).toBe(testData);
});

test('should process YAML data', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toBe(testData);
});
