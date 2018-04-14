module.exports = [

    {
        reg: /^\/src\/main\/widget\/(.*\.(?:ftl|html))$/i,
        isMod: true,
        release: '${templates}/${namespace}/widget/$1'
    },

    {
        reg: /^\/src\/main\/page\/(.+\.(?:ftl|html))$/i,
        isMod: true,
        release: '/${templates}/${namespace}/page/$1',
        extras: {
            isPage: true
        }
    },

    {
        reg: /^\/src\/main\/components\/(.*\.(js|css))$/i,
        isMod: true,
        release: '${statics}/${namespace}/components/$1'
    },

    // 页面级 js
    // 设置 page/**.js 为 isMod 可以自动包装成 amd
    {
        reg: /^\/src\/main\/page\/(.*\.js)$/i,
        isMod: true,
        release: '${statics}/${namespace}/page/$1'
    },

    // widget 级 js/css
    {
        reg: /^\/src\/main\/widget\/(.*\.(js|css))$/i,
        isMod: true,
        release: '${statics}/${namespace}/widget/$1'
    },

    // 文件名以 _ 下划线打头的，最终都不 release
    // 也不优化，因为这类文件都只会被内嵌的。
    {
        reg: '**/_*.*',
        release: false,
        useAMD: false,
        useOptimizer: false
    },

    {
        reg: /^\/(static)\/(.*)/i,
        release: '${statics}/${namespace}/$2'
    },

    // 允许用户自己扩展预览环境。
    {
        reg: /^\/(WEB-INF)\/(.*)/i,
        release: 'WEB-INF/$2'
    },

    {
        reg: /^\/(test)\/(.*)/i,
        isMod: false,
        release: '/$1/${namespace}/$2'
    },

    {
        reg: 'server.conf',
        release: '/WEB-INF/server${namespace}.conf'
    },

    {
        reg: "**.sh",
        release: false
    },

    {
        reg: '${namespace}-map.json',
        release: '/WEB-INF/config/${namespace}-map.json'
    },

    {
        reg: 'map.json',
        release: '/WEB-INF/config/map.json'
    },

    {
        reg: 'freemarker.properties',
        release: '/WEB-INF/properties/freemarker.properties'
    },

    {
        reg: /^.+$/,
        release: '${statics}/${namespace}$&'
    }
];