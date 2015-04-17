module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {},
      dist: {
        src: ['src/**/*.js'], //src文件夹下包括子文件夹下的所有文件  
        dest: 'dist/<%= pkg.name %>.js' //合并文件在dist下名为merge-table.js的文件  
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js', //压缩源文件是之前合并的merge-table.js文件  
        dest: 'dist/<%= pkg.name %>.min.js' //压缩文件为merge-table.min.js  
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "bower" task.
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};