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
                src: ['_ui/js/main.js'],
                dest: '_ui/js/compiled.js'
            }
        },
        sass: {
            dist: {
                files: {
                    '_ui/css/compiled.css': '_ui/sass/main.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true
                },
                files: {
                    '_ui/css/compiled.debug.css': '_ui/sass/main.scss'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    "_ui/css/compiled.css": ["_ui/css/compiled.css"]
                }
            }
        },
        watch: {
            js: {
                files: ['_ui/js/**/*.js', '!_ui/js/compiled.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_ui/sass/**/*.scss'],
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