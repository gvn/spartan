/*global module: false */
/*jslint browser: false, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*

    Dependencies:

    + npm
    + grunt-cli
        > npm install -g grunt-cli
    + ruby
    + sass gem
        > gem install sass

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
                dest: '_fe/compiled/app.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    '_fe/compiled/app.css': '_fe/sass/main.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true
                },
                files: {
                    '_fe/compiled/app.debug.css': '_fe/sass/main.scss'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    "_fe/compiled/app.css": ["_fe/compiled/app.css"]
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    client: true,
                    namespace: '<%= pkg.namespace %>.templates',
                    processName: function (filename) {
                        // Remove filepath and extension (_fe/jade/cool.jade -> cool)
                        filename = filename.match(/\/[a-zA-Z\-\.0-9]*(?=\.jade)/)[0].slice(1).toLowerCase();

                        // Remove . and - characters and convert to camelCase
                        return filename.replace(/[\-\.]([a-z])/g, function (g) { return g[1].toUpperCase(); });
                    }
                },
                files: {
                    '_fe/js/<%= pkg.namespace.toLowerCase() %>.templates.js': ["_fe/jade/*.jade"]
                }
            }
        },
        watch: {
            sass: {
                files: ['_fe/sass/**/*.scss'],
                tasks: ['sass:dev']
            },
            jade: {
                files: ['_fe/jade/**/*.jade'],
                tasks: ['jade']
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
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('deploy', ['jade', 'uglify', 'sass', 'cssmin']);

};
