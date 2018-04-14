module.exports = [
    //所有模板
    {
        reg: /^\/src\/main\/(.*\.(?:ftl))/i,
        isMod: true,
        release: '${templates}/$1'
    },

    //
    {
        reg: /^\/src\/main\/(static)\/(.*)/i,
        release: '${statics}/$2'
    },

    {
        reg: /^\/src\/main\/widget\/(.*\.(?:js|css))/i,
        isMod: true,
        release: '${statics}/${namespace}/widget/$1'
    },

    {
        reg: /^\/src\/main\/components\/(.*\.(js|css))$/i,
        isMod: true,
        release: '${statics}/${namespace}/components/$1'
    },

    {
        reg: /^\/src\/test\/(.*)/i,
        isMod: false,
        release: '/test/$1'
    },

    {
        reg: 'server.conf',
        release: '/WEB-INF/server.conf'
    },

    {
        reg: 'map.json',
        release: '/WEB-INF/config/map.json'
    },

    {
        reg: 'nfis.properties',
        release: '/WEB-INF/nfis.properties'
    }

];