# @lukaszbieniek/eslint-config

Shareable [eslint](https://eslint.org/) config files

[![npm-version](https://img.shields.io/npm/v/@lukaszbieniek/eslint-config)](https://www.npmjs.com/package/@lukaszbieniek/eslint-config)
[![npm-license](https://img.shields.io/npm/l/@lukaszbieniek/eslint-config)](https://www.npmjs.com/package/@lukaszbieniek/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Usage

Install package:

```sh
$ npm install --save-dev eslint prettier @lukaszbieniek/eslint-config
```

Extend your `.eslintrc.js` config file:

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@lukaszbieniek/eslint-config',
    // '@lukaszbieniek/eslint-config/lib/typescript',
    // '@lukaszbieniek/eslint-config/lib/jest',
  ],
}
```

### License

See [LICENSE](./LICENSE) file for details.
