/* global require, module */
var path = require('path');

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var yeomanConfig = {
    app: 'public',
    dist: 'dist',
    port: 3000
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      less: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.less'],
        tasks: ['less:server']
      }
    },
    express: {
      all: {
        options: {
          port: yeomanConfig.port,
          bases: ['.tmp', '<%= yeoman.app %>'],
          livereload: true
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= yeoman.port %>'
      }
    },
    less: {
      options: {
        paths: [
          '<%= yeoman.app %>/components'
        ]
      },
      server: {
        files: {
          '.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.less'
        }
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': '<%= yeoman.app %>/styles/main.less'
        }
      }
    },
    clean: {
      dist: ['<%= yeoman.dist %>']
    },
    copy: {
      dist: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        src: [
          'CNAME',
          '**/*.{html,txt,css,js,svg,png,jpg}',
          '!components/**/*',
          'components/html5shiv/dist/html5shiv.js',
          'components/bootstrap/fonts/*'
        ],
        dest: '<%= yeoman.dist %>/'
      },
      dist2: {
        expand: true,
        src: [
          'hours.tsv'
        ],
        dest: '<%= yeoman.dist %>/'
      },
      server: {
        expand: true,
        src: [
          'hours.tsv'
        ],
        dest: '.tmp'
      }
    },
    'gh-pages': {
      options: {
        base: '<%= yeoman.dist %>/'
      },
      src: ['**/*']
    }
  });

  grunt.registerTask('server', [
    'less:server',
    'copy:server',
    'express',
    'open',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'less:dist',
    'copy:dist',
    'copy:dist2'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);

  grunt.registerTask('default', ['build']);
};
