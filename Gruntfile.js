/*global module: false */
/*jslint browser: false, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Dependencies:
    
    - npm
    - grunt-cli > npm install -g grunt-cli
    - ruby
    - sass gem > gem install sass

    Setup:

    > npm install

*/

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
            },
            build: {
                src: ['_fe/js/main.js'],
                dest: '_fe/js/compiled.js'
            }
        },
        sass: {
            dist: {
                files: {
                    '_fe/css/compiled.css': '_fe/sass/main.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true
                },
                files: {
                    '_fe/css/compiled.debug.css': '_fe/sass/main.scss'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    "_fe/css/compiled.css": ["_fe/css/compiled.css"]
                }
            }
        },
        watch: {
            js: {
                files: ['_fe/js/**/*.js', '!_fe/js/compiled.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_fe/sass/**/*.scss'],
                tasks: ['sass:dev']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('deploy', ['uglify', 'sass', 'cssmin']);

};