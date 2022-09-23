import _ from 'lodash';

const getIndent = (depth, spaces = 4) => ' '.repeat(depth * spaces - 2);

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

const stylish = (data) => {
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
      case 'nested': {
        const objectResult = children.flatMap((child) => iter(child, adjust + 1));
        return `${getIndent(adjust)}  ${key}: {\n${objectResult.join('\n')}\n${getIndent(adjust)}  }`;
      }
      case 'removed':
        return `${getIndent(adjust)}- ${key}: ${buildString(value, adjust)}`;
      case 'added':
        return `${getIndent(adjust)}+ ${key}: ${buildString(value, adjust)}`;
      case 'same':
        return `${getIndent(adjust)}  ${key}: ${buildString(value, adjust)}`;
      case 'updated':
        return `${getIndent(adjust)}- ${key}: ${buildString(value1, adjust)}\n${getIndent(adjust)}+ ${key}: ${buildString(value2, adjust)}`;
      default:
        return false;
    }
  };

  const result = data.map((item) => iter(item));
  return `{\n${result.join('\n')}\n}`;
};

export default stylish;
