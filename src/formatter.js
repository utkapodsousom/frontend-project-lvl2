import stylish from './formats/stylish.js';
import plain from './formats/plain.js';

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default formatter;
