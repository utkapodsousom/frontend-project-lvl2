import _ from 'lodash';

const compareData = (obj1, obj2) => {
  console.log(typeof obj1);
  const uniqKeys = _.uniq([...Object.keys(obj1), ...Object.keys(obj2)]);
  const sortedKeys = _.sortBy(uniqKeys);

  const result = sortedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!_.has(obj2, key)) {
      return {
        type: '-',
        key,
        value: value1,
      };
    }
    if (!_.has(obj1, key)) {
      return {
        type: '+',
        key,
        value: value2,
      };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: '-+',
        key,
        value1,
        value2,
      };
    }
    return {
      type: '=',
      key,
      value: value1,
    };
  });
  return result;
};

export default compareData;
