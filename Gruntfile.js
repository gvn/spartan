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
          sourceMapFilename: 'app.debug.map',
          sourceMapBasepath: '_fe/compiled/',
          sourceMapRootpath: '/'
        },
        files: {
          '_fe/compiled/app.min.css': '_fe/less/main.less'
        }
      }
    },
    jade: {
      compileJSTemplates: {
        options: {
          amd: true,
          client: true,
          compileDebug: false,
          // Use only file name sans suffix: foo-bar.jade -> foo-bar
          processName: function (filename) {
            return filename.match(/\/([a-zA-Z0-9\-]*).jade$/)[1];
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
        tasks: ['jade:compileJSTemplates']
      },
      index: {
        files: ['index.jade'],
        tasks: ['jade:development', 'jade:production']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000
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
    }
  });

  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Recompile Jade and Sass as needed
  grunt.registerTask('default', ['less', 'jade', 'connect', 'watch']);

  // Compile Jade, Sass and JS
  grunt.registerTask('build', ['jshint', 'less', 'cssmin', 'jade']);

  // Verify code before a commit
  grunt.registerTask('clean', ['jsbeautifier:modify', 'jshint']);

};
