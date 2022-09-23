# gendiff
### CLI utility for comparing two data structures
&nbsp;
### Hexlet tests and linter status:
[![Maintainability](https://api.codeclimate.com/v1/badges/8df1de527f3e2ee96920/maintainability)](https://codeclimate.com/github/utkapodsousom/frontend-project-lvl2/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/8df1de527f3e2ee96920/test_coverage)](https://codeclimate.com/github/utkapodsousom/frontend-project-lvl2/test_coverage) [![hexlet-check](https://github.com/utkapodsousom/frontend-project-lvl2/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/utkapodsousom/frontend-project-lvl2/actions/workflows/hexlet-check.yml)

___

### Installation:
Install dependencies
```sh
make install
```

Create symlink
```sh
npm link
```

## Commands

Get help:
```sh
gendiff --help, -h
```
Supported file formats:
`.json`, `.yml`, `.yaml`

### How to use
```sh
gendiff [options] <filepath1> <filepath2>
```

Options:
* -V, --version             output the version number
* -f, --format [type]       output format (choices: "stylish", "plain", "json", default: stylish)
* -h, --help                display help for command

### Stylish output (default)
[![asciicast](https://asciinema.org/a/Ek2jw1FXe2kCHQIpwvb4klmYy.svg)](https://asciinema.org/a/Ek2jw1FXe2kCHQIpwvb4klmYy)

### Plain output
`gendiff <file1> <file2> -f plain`
[![asciicast](https://asciinema.org/a/T3icmCZa0e7IQoT8OXmuhtRAe.svg)](https://asciinema.org/a/T3icmCZa0e7IQoT8OXmuhtRAe)

### JSON output
`gendiff <file1> <file2> -f json`
[![asciicast](https://asciinema.org/a/7erF5eQ3qQKbfoxPOSQfyLE5A.svg)](https://asciinema.org/a/7erF5eQ3qQKbfoxPOSQfyLE5A)