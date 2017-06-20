/**
 * 使用dekko检查测试的输出文件或目录结构是有效的，
 * 参考：https://www.npmjs.com/package/dekko
 * */
const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('antd.css')
  .hasFile('antd.min.css')
  .hasFile('antd.js')
  .hasFile('antd.min.js');

// eslint-disable-next-line
console.log('`dist` directory is valid.');

