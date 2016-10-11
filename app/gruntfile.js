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
        webpack: {
            build: {
                devtool: 'source-map',
                progress: true,
                entry: {
                    app: './'
                },
                output: {
                    path: './dist/',
                    filename: 'app.bundle.js',
                    map: true
                },
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader'

                        },
                        {
                            test: /\.html$/,
                            loader: "babel!es6-template-string"
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