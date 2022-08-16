import fs from 'fs';
import path from 'path';
import compareData from '../src/comparator.js';
import formatData from '../src/formatter.js';

const getPath = (file) => path.resolve(process.cwd(), './__fixtures__', file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');

const genDiff = (file1, file2) => {
  const content1 = JSON.parse(readFile(file1));
  const content2 = JSON.parse(readFile(file2));

  const comparedData = compareData(content1, content2);
  return formatData(comparedData);
};

export default genDiff;
