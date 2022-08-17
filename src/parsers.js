import { parse } from 'yaml';

export default (data, type) => {
  switch (type) {
    case 'yml':
    case 'yaml':
      return parse(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error('format not supported');
  }
};
