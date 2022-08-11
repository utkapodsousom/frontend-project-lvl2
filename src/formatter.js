const formatter = (data) => {
  const result = data.map((item) => {
    const { type, key, value, value1, value2 } = item;
    switch (type) {
      case '-':
        return `  - ${key}: ${value}`;
      case "=":
        return `    ${key}: ${value}`;
      case "+":
        return `  - ${key}: ${value1}\n  + ${key}: ${value2}`;
      default:
        return false;
    }
  }).join('\n');
  
  return `{\n${result}\n}`;
};

export default formatter;