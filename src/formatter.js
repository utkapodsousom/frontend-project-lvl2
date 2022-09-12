import _ from 'lodash';

const getIndent = (times, char = ' ') => char.repeat(times * 4 - 2);

const buildString = (val, times = 1) => {
  if (!_.isObject(val)) {
    return val;
  }
  const keys = Object.keys(val);
  const result = keys.map((key) => {
    const newKey = val[key];
    return `${getIndent(times + 1)}  ${key}: ${buildString(newKey, times + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${getIndent(times)}}`;
};

const formatter = (data) => {
  const iter = (node, adjust = 1) => {
    const {
      type,
      key,
      value,
      value1,
      value2,
      children,
    } = node;
    switch (type) {
      case 'object': {
        const objectResult = children.flatMap((child) => iter(child, adjust + 1));
        return `${getIndent(adjust)}  ${key}: {\n${objectResult.join('\n')}\n${getIndent(adjust)}  }`;
      }
      case '-':
        return `${getIndent(adjust)}- ${key}: ${buildString(value, adjust)}`;
      case '+':
        return `${getIndent(adjust)}+ ${key}: ${buildString(value, adjust)}`;
      case '=':
        return `${getIndent(adjust)}  ${key}: ${buildString(value, adjust)}`;
      case '-+':
        return `${getIndent(adjust)}- ${key}: ${buildString(value1, adjust)}\n${getIndent(adjust)}+ ${key}: ${buildString(value2, adjust)}`;
      default:
        return false;
    }
  };

  const result = data.map((item) => iter(item));
  return `{\n${result.join('\n')}\n}`;
};

export default formatter;
