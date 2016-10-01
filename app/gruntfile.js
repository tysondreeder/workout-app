module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'babel'],
                options: {
                    spawn: false,
                },
            },
        },
        // concat: {
        //     options: {
        //         separator: ';',
        //     },
        //     dist: {
        //         src: ["src/js/**/*.js"],
        //         dest: 'src/js/entry.js',
        //     },
        // },
        // babel: {
        //     options: {
        //         sourceMap: true,
        //         minified: false
        //     },
        //     dist: {
        //         files: {
        //             "dist/app.bundle.js": "bundle.js"
        //         }
        //     }
        // },
        webpack: {
            build: {
                progress: true,
                entry: {
                    app: './src/js/entry.js'
                },
                output: {
                    path: './dist/',
                    filename: 'app.bundle.js',
                    map: true
                },
                module: {
                    loaders: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    }]
                },
                resolve: {
                    extenstions: ['', '.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask("watch", ['watch']);

    grunt.registerTask("default", ["webpack"]);
};