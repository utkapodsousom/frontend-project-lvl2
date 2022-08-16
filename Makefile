install:
	npm ci

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8