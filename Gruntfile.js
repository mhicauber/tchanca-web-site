/*global module:false*/
module.exports = function (grunt) {



    // CONFIG
    grunt.initConfig({
        jshint: {
            src: ['Gruntfile.js', 'js/*.js'],
            options: {
                jshintrc: true
            }
        },

        watch: {
            files: '<%= jshint.src %>',
            tasks: ['jshint']
        }
    });




    // LOAD TASKS
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', 'jshint');
};
