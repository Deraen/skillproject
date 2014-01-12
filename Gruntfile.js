module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

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
        tasks: ['less:server'],
        options: {
          atBegin: true
        }
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
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html'
    },
    usemin: {
      html: '<%= yeoman.dist %>/**/*.html'
    },
    copy: {
      dist: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        src: [
          'CNAME',
          '**/*.{html,txt,css,js,svg,png,jpg}',
          '!components/**/*',
          'components/bootstrap/fonts/*',
          'temp/**/*'
        ],
        dest: '<%= yeoman.dist %>/'
      },
      dist2: {
        expand: true,
        src: [
          '*.tsv',
          'documents/**/*.{png,PNG}',
        ],
        dest: '<%= yeoman.dist %>/'
      },
      server: {
        expand: true,
        src: [
          '*.tsv'
        ],
        dest: '.tmp'
      }
    },
    markdown: {
      all: {
        files: [{
          expand: true,
          src: 'documents/**/*.md',
          dest: '<%= yeoman.dist %>/',
          ext: '.html',
        }],
      },
    },
    'gh-pages': {
      options: {
        base: '<%= yeoman.dist %>/'
      },
      src: ['**/*']
    }
  });

  grunt.registerTask('server', [
    'copy:server',
    'express',
    'open',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'less:dist',
    'useminPrepare',
    'concat',
    'uglify',
    'markdown',
    'copy:dist',
    'copy:dist2',
    'usemin',
  ]);

  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);

  grunt.registerTask('default', ['build']);
};
