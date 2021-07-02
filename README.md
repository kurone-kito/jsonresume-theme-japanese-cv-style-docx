# “@kurone-kito/jsonresume-theme-japanese-cv-style-docx”

[![npm version](https://badge.fury.io/js/%40kurone-kito%2Fjsonresume-theme-japanese-cv-style-docx.svg)](https://badge.fury.io/js/%40kurone-kito%2Fjsonresume-theme-japanese-cv-style-docx)
[![Coverage Status](https://coveralls.io/repos/github/kurone-kito/jsonresume-theme-japanese-cv-style-docx/badge.svg?branch=master)](https://coveralls.io/github/kurone-kito/jsonresume-theme-japanese-cv-style-docx?branch=master)

JSON Resume から、日本のお堅い系企業ウケしそうな職務経歴書の Word DOCX
ファイルを生成する NPM パッケージです。既存のテーマは揃いも揃ってモダンで、
かつ Word DOCX を出力できるテーマが見当たりませんでしたので、制作しました。

An NPM package that generates a Word DOCX file of Japanese-style resume
from JSON Resume. The existing themes are all modern and stylish. And then
cannot found that can output Word DOCX.

## Requires

### Strongly recommended

- Node.js &gt;= v16 (On ARM64 e.g. Apple M1)
- Node.js &gt;= v14 (On x86-64)

### or

- Node.js &gt;= v12, and [a latest `full-icu` package](https://github.com/unicode-org/full-icu-npm) (On x86-64)

## Usage

```sh
npm install --save @kurone-kito/jsonresume-theme-japanese-cv-style-docx
```

```JavaScript
import fs from 'fs';
import render from '@kurone-kito/jsonresume-theme-japanese-cv-style-docx';
// // ⬆️ or ⬇️
// const { render } = require('@kurone-kito/jsonresume-theme-japanese-cv-style-docx');
const resume = require('./resume.json');

const filename = 'resume.docx';

render(resume).then(buffer => {
  fs.writeFileSync(filename, buffer);
  console.log(`writted: ${filename}`);
});
```

## API

### render()

```TypeScript
render(resume: EnhancedResume): Promise<Buffer>
```

#### Params

- resume: A JSON Resume object. (See following: [EnhancedResume](#enhancedresume))

#### Returns

Body of the Word DOCX file.

## Types

### EnhancedResume

Enhanced definition of the JSON Resume.

```JSON
{
  "projects": [
    {
      ...
      "env": {
        "os": ["Windows XP", "AIX"],
        "language": ["PL/I", "COBOL"],
        "platforms": ["Excel 2000"]
      }
    }
  ],
  "skills": [
    {
      ...
      "tags": "language"
    },
    {
      ...
      "tags": ["tools", "foobar"]
    }
  ]
}
```

## License

MIT
