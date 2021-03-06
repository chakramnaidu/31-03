// This config is used during development and build phase only
// It will not be available on production

var SystemConfig = (function() {
    // List your node_modules packages here
    var packages = [
        'angular2',
        'rxjs',
        'ng2-translate'
    ];

    var config = {
        baseUrl: '.',
        paths: {
            'n:*': 'node_modules/*'
        },
        map: {
            'ng2-translate': 'ng2-translate/index.js',
            'rxjs': 'node_modules/rxjs'
        },
        packages: {
            'app': {
                format: 'register',
                defaultExtension: 'js'
            },
            'test': {
                format: 'register',
                defaultExtension: 'js'
            }
        }
    };

    for (var i = packages.length - 1; i >= 0; i--) {
        var package = packages[i];
        config.map[package] = 'n:' + package;
        config.packages[package] = {
            defaultExtension: 'js'
        };
    }

    System.config(config);
})();
