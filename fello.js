var fis = module.exports = require('fis');

// 让 jello 打头的先加载。
fis.require.prefixes.unshift('jello');

fis.cli.name = 'fello';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.help.commands = [ 'release', 'server' ];

fis.config.merge({
    namespace: '',
    statics: '/static',
    templates: '/WEB-INF/template',

    server: {
        clean: {
            exclude: "WEB-INF/lib/**,WEB-INF/web.xml,WEB-INF/freemarker.properties,WEB-INF/template/index.ftl"
        }
    },

    modules: {
        /*
        parser: {
            less: 'less',
            sass: 'sass',
            scss: 'sass',
            tmpl: 'bdtmpl',
            po: 'po'
        },
        */

        preprocessor: {
            html: 'components',
            js: 'components',
            css: 'components'
        },

        postprocessor: {
            js: 'jswrapper, require-async'
        },

        prepackager: 'derived',

        packager: 'depscombine'
    },

    roadmap: {
  
        ext: {
            less: 'css',
            sass: 'css',
            scss: 'css',
            tmpl: 'js',
            po: 'json'
        },

        path: [/*后续填充*/]
    },

    settings: {
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        }
    },

    component: {
        skipRoadmapCheck: true
    }
});

fis.emitter.once('fis-conf:loaded', function() {
    var paths = fis.config.get('roadmap.path', []);
    var defaultPaths = fis.config.get('namespace') ? require('./roadmap/with_ns.js') : require('./roadmap/default.js');

    paths.push.apply(paths, defaultPaths);
});