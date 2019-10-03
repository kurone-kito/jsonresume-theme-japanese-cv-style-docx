# jsonresume-theme-japanese-cv-style-docx

[![npm version](https://badge.fury.io/js/%40kurone-kito%2Fjsonresume-theme-japanese-cv-style-docx.svg)](https://badge.fury.io/js/%40kurone-kito%2Fjsonresume-theme-japanese-cv-style-docx)
[![Coverage Status](https://coveralls.io/repos/github/kurone-kito/jsonresume-theme-japanese-cv-style-docx/badge.svg?branch=master)](https://coveralls.io/github/kurone-kito/jsonresume-theme-japanese-cv-style-docx?branch=master)

Generate a Word docx file of Japanese-style resume (職務経歴書) from JSON Resume

## Usage

```sh
npm install --save @kurone-kito/jsonresume-theme-japanese-cv-style-docx
```

```JavaScript
const fs = require('fs');
const { render } = require('@kurone-kito/jsonresume-theme-japanese-cv-style-docx');
// import render from '@kurone-kito/jsonresume-theme-japanese-cv-style-docx';
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

- resume: A JSON Resume object.

#### Returns

Body of the docx file.

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
