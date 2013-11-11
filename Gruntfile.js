/*

    Dependencies:

    + npm
    + grunt-cli ( > npm install -g grunt-cli )

    Setup:

    > npm install

*/

module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          sourceMap: true,
          sourceMapFilename: '_fe/compiled/less.debug.map',
          sourceMapRootpath: '../../'
        },
        files: {
          '_fe/compiled/app.min.css': '_fe/less/main.less'
        }
      }
    },
    jade: {
      compileJSTemplates: {
        options: {
          client: true,
          compileDebug: false,
          // Trims before _fe/jade/ to give template names like "foo" and "bar/foo"
          processName: function (filename) {
            return filename.match(/(?:_fe\/jade\/)(.*)(?:.jade$)/)[1];
          }
        },
        files: {
          '_fe/compiled/jade-templates.js': ['_fe/jade/**/*.jade']
        }
      },
      production: {
        files: {
          'index.html': 'index.jade'
        }
      },
      development: {
        files: {
          'index.dev.html': 'index.jade'
        }
      }
    },
    watch: {
      less: {
        files: ['_fe/less/**/*.less'],
        tasks: ['less:development']
      },
      jade: {
        files: ['_fe/jade/**/*.jade'],
        tasks: ['jade:compileJSTemplates', 'browserify']
      },
      index: {
        files: ['index.jade'],
        tasks: ['jade:development', 'jade:production']
      },
      js: {
        files: ['_fe/js/**/*.js'],
        tasks: ['browserify']
      }
    },
    connect: {
      server: {
        options: {
          port: 1337,
          open: true
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', '_fe/js/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jsbeautifier: {
      modify: {
        src: ['Gruntfile.js', '_fe/js/**/*.js'],
        options: {
          config: '.jsbeautifyrc'
        }
      },
      verify: {
        src: ['Gruntfile.js', '_fe/js/**/*.js'],
        options: {
          mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    browserify: {
      main: {
        files: {
          '_fe/compiled/app.compiled.js': ['_fe/js/app.js']
        },
        options: {
          debug: true,
          shim: {
            jadeTemplates: {
              path: '_fe/compiled/jade-templates.js',
              exports: 'JST'
            },
            jquery: {
              path: './bower_components/jquery/jquery.js',
              exports: '$'
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Recompile Jade and Sass as needed
  grunt.registerTask('default', ['less', 'jade', 'browserify', 'connect', 'watch']);

  // Compile Jade, Sass and JS
  grunt.registerTask('build', ['jshint', 'less', 'jade', 'browserify']);

  // Clean code before a commit
  grunt.registerTask('clean', ['jsbeautifier:modify', 'jshint']);

};
