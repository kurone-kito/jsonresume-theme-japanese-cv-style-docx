/* eslint @typescript-eslint/no-var-requires: off */
const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-unresolved
const { render } = require('../dist');
const resume = require('./resume.json');

const filename = path.resolve(__dirname, 'resume.docx');
render(resume).then((buffer) => {
  fs.writeFileSync(filename, buffer);
  // eslint-disable-next-line no-console
  console.log(`writted: ${filename}`);
});
