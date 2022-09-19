import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../bin/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (file) => path.resolve(process.cwd(), __dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');
const testDataStylish = readFile('correct-stylish.txt');
const testDataPlain = readFile('correct-plain.txt');
const testDataJson = readFile('correct-json.txt');

test('should output stylish format from JSON data', () => {
  expect(genDiff('file1.json', 'file2.json')).toBe(testDataStylish);
});

test('should output stylish format from YAML data', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toBe(testDataStylish);
});

test('should output plain format from JSON data', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toBe(testDataPlain);
});

test('should output plain format from YAML data', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toBe(testDataPlain);
});

test('should output JSON format from JSON data', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toBe(testDataJson);
});

test('should output JSON format from YAML data', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'json')).toBe(testDataJson);
});
