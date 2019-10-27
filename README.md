# jsonresume-theme-japanese-cv-style-docx

[![npm version](https://badge.fury.io/js/%40kurone-kito%2Fjsonresume-theme-japanese-cv-style-docx.svg)](https://badge.fury.io/js/%40kurone-kito%2Fjsonresume-theme-japanese-cv-style-docx)

Generate a Word docx file of Japanese-style resume (履歴書) from JSON Resume

## Usage

```sh
npm install --save @kurone-kito/jsonresume-theme-japanese-cv-style-docx
```

```JavaScript
const fs = require('fs');
const { render } = require('@kurone-kito/jsonresume-theme-japanese-cv-style-docx');
const resume = require('./resume.json');

const filename = 'resume.docx';

render(resume).then(buffer => {
  fs.writeFileSync(filename, buffer);
  console.log(`writted: ${filename}`);
});
```
