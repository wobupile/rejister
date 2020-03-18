module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'index.min.html'
      }
    },
    cssmin:{
      'index.min.css':'index.css'
    },
    uglify: {
      release:{
        files: {
          'index.min.js': 'index.js'
        }
      }       
    } 
    });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('html', ['htmlmin']);
  grunt.registerTask('css',['cssmin']);
  grunt.registerTask('ugli',['uglify:release']);
};
