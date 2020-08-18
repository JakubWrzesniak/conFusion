'use strict';

module.exports = function(grunt) {

    const sass = require('node-sass');

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        sprite: 'grunt-spritesmith',
        foo: '@abc/grunt-foo', // for private modules.
        bar: 'custom/bar.js' // for custom tasks.
    });

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bdFile: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};