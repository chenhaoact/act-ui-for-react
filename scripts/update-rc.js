#!/usr/bin/env node

/* eslint strict:0, camelcase:0 */

'use strict';

/**
 * 组件的版本更新设置会用到antd-tools/lib/updateComponents
 * */
require('antd-tools/lib/updateComponents')((name) => {
  return !!name.match(/^rc-/);
});
