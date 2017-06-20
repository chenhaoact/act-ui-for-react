/**
 * demo测试的一些设置
 * 需要安装
 * glob 参考https://www.npmjs.com/package/glob
 * enzyme （JavaScript Testing utilities for React）参考https://github.com/airbnb/enzyme
 * 并安装enzyme-to-json
 * mockdate 参考https://www.npmjs.com/package/mockdate
 * */
import glob from 'glob';
import { render } from 'enzyme';
import MockDate from 'mockdate';

export default function demoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.md`);

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip;
    }
    testMethod(`renders ${file} correctly`, () => {
      MockDate.set(new Date('2016-11-22').getTime() + (new Date().getTimezoneOffset() * 60 * 1000));
      const demo = require(`../.${file}`); // eslint-disable-line global-require, import/no-dynamic-require
      const wrapper = render(demo);
      expect(wrapper).toMatchSnapshot();
      MockDate.reset();
    });
  });
}
