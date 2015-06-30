'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    jshint: {
      files: [
        '**/*.js',
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'client/assets/**/*.js',
          'node_modules/**/*.js',
          '**/node_modules/**/*.js',
          'bower_components/**/*.js',
          '**/bower_components/**/*.js',
          'test/testData.js'
        ]
      }
    },

    "bower-install-simple": {
      options: {
        color: true,
        directory: 'bower_components'
      },
      "prod": {
        options: {
          production: true
        }
      },
      "dev": {
        options: {
          production: false
        }
      }
    },

    watch: {
      scripts: {
        files: [
          '**/*.js',
          './*.js',
        ],
        tasks: [
          'jshint',
        ]
      },
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-bower-install-simple');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('mon', [
    'jshint',
    'concurrent'
  ]);



  grunt.registerTask('default', [
    'jshint',
    'bower-install-simple',
    'concurrent'
  ]);

  grunt.registerTask('hint', [
    'jshint',
  ]);
};
