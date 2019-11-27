/* eslint @typescript-eslint/no-var-requires: off */
const fs = require('fs');
const path = require('path');
const { render } = require('..');
const resume = require('./resume.json');

const filename = path.resolve(__dirname, 'resume.docx');

render(resume).then(buffer => {
  fs.writeFileSync(filename, buffer);
  console.log(`writted: ${filename}`);
});
