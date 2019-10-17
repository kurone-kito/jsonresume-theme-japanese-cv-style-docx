const fs = require('fs');
const { render } = require('.');
const resume = require('./resume.json');

const filename = 'resume.docx';

render(resume).then(buffer => {
  fs.writeFileSync(filename, buffer);
  console.log(`writted: ${filename}`);
});
