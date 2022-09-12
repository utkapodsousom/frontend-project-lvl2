import _ from 'lodash';

const stringify = (val) => {
  if (_.isObject(val)) {
    return '[complex value]';
  }
  return typeof val === 'string' ? `'${val}'` : val;
};

const plain = (data) => {
  const iter = (node, parent = '') => {
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
        const objectResult = children.flatMap((child) => iter(child, `${parent}${key}.`));
        return objectResult.join('\n');
      }
      case '-':
        return `Property '${parent}${key}' was removed`;
      case '+':
        return `Property '${parent}${key}' was added with value: ${stringify(value)}`;
      case '-+':
        return `Property '${parent}${key}' was updated. From ${stringify(value1)} to ${stringify(value2)}`;
      case '=':
        return null;
      default:
        throw new Error(`Unknown data type: ${type}`);
    }
  };

  const result = data.map((item) => iter(item));
  return `${result.join('\n')}`;
};

export default plain;
