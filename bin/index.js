import fs from 'fs';
import path from 'path';
import parsers from '../src/parsers.js';
import compareData from '../src/comparator.js';
import formatData from '../src/formatter.js';

const getPath = (file) => path.resolve(process.cwd(), '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getPath(file), 'utf-8');
const getFileExtension = (file) => path.extname(getPath(file)).substring(1);

const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const extension = getFileExtension(file1);
  const parsedData1 = parsers(data1, extension);
  const parsedData2 = parsers(data2, extension);

  const comparedData = compareData(parsedData1, parsedData2);
  return formatData(comparedData, format);
};

export default genDiff;
