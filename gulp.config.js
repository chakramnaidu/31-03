module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var test = root + 'test/';
    var testHelper = test + 'test-helpers/';
    var e2e = test + 'e2e/';
    var assets = root + 'assets/';
    var assetsPath = {
        css: assets + 'css/',
        images: assets + 'images/',
        fonts: assets + 'fonts/',
        less: assets + 'less/'
    };
    var index = root + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var tsTestFiles = {
        unit: [app + '**/*.spec.ts'],
        e2e: [e2e + '**/*.ts'],
        helper: [testHelper + '**/*.ts']
    };
    var build = {
        path: 'build/',
        app: 'build/app/',
        fonts: 'build/fonts',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var report = {
        path: 'report/'
    };
    var liveServer = {
        dev: {
            port: 34214,
            host: "https://heroku-ui-test-8080.herokuapp.com",
            open: '/',
            file: "index.html",
            wait: 1000,
            logLevel: 0
        },
        prod: {
            port: 3001,
            host: "https://heroku-ui-test-8080.herokuapp.com",
            root: 'build/',
            file: "index.html",
            wait: 1000,
            logLevel: 0
        }
    };

    var e2eConfig = {
        seleniumTarget: 'https://heroku-ui-test-8080.herokuapp.com:3000'
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            // TODO: remove this when angular2 bug is solved
            mangle: false,
            // TODO
            globalDefs: { DEBUG: false }
        }
    };

    var config = {
        root: root,
        app: app,
        test: test,
        testHelper: testHelper,
        e2e: e2e,
        e2eConfig: e2eConfig,
        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        tsTestFiles: tsTestFiles,
        liveServer: liveServer,
        systemJs: systemJs
    };

    return config;
};
