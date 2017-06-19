/**
 * Created by chenhaoact on 2017/6/6.
 */
/* eslint no-console:0 */
//驼峰法转化，下边会用到
function camelCase(name) {
    return name.charAt(0).toUpperCase() +
        name.slice(1).replace(/-(\w)/g, (m, n) => {
            return n.toUpperCase();
        });
}

// Just import style for https://github.com/ant-design/ant-design/issues/3745
/**
 * 引入组件的less样式文件，每个组件的style目录下的index.tsx也是在引用less样式文件
 */
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

req.keys().forEach((mod) => {
    let v = req(mod);
    if (v && v.default) {
        v = v.default;
    }
    const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
    if (match && match[1]) {
        if (match[1] === 'message' || match[1] === 'notification') {
            // message & notification should not be capitalized
            exports[match[1]] = v;
        } else {
            /**
             * 除了message和notification外
             * 将less样式转驼峰
             * 并将所有的样式导出暴露
             * */
            exports[camelCase(match[1])] = v;
        }
    }
});

/**
 * 将components下组件定义的模块都导出暴露
 * */
module.exports = require('./components');