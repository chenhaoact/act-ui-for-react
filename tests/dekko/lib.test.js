/**
 * 使用dekko检查测试的输出文件或目录结构是有效的，
 * 参考：https://www.npmjs.com/package/dekko
 * */
const $ = require('dekko');

$('lib')
  .isDirectory()
  .hasFile('index.js')
  .hasFile('index.d.ts');

$('lib/*')
  .filter((filename) => {
    return !filename.endsWith('index.js') &&
      !filename.endsWith('index.d.ts');
  })
  .isDirectory()
  .filter((filename) => {
    return !filename.endsWith('style') &&
      !filename.endsWith('_util');
  })
  .hasFile('index.js')
  .hasFile('index.d.ts')
  .hasDirectory('style');

$('lib/*/style')
  .hasFile('css.js')
  .hasFile('index.js');

// eslint-disable-next-line
console.log('`lib` directory is valid.');

