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
                src: ['_frontend/js/main.js'],
                dest: '_frontend/js/compiled.js'
            }
        },
        sass: {
            dist: {
                files: {
                    '_frontend/css/compiled.css': '_frontend/sass/main.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true
                },
                files: {
                    '_frontend/css/compiled.debug.css': '_frontend/sass/main.scss'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    "_frontend/css/compiled.css": ["_frontend/css/compiled.css"]
                }
            }
        },
        watch: {
            js: {
                files: ['_frontend/js/**/*.js', '!_frontend/js/compiled.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_frontend/sass/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'sass:dev']);
    grunt.registerTask('deploy', ['uglify', 'sass', 'cssmin']);

};