/*global module:false*/
module.exports = function (grunt) {

   /* grunt.registerTask('watch', [ 'watch' ]);

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'js*//*.js'
                ],
                dest: 'dist/js/main.min.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'public/js/main.min.js': ['public/js/main.min.js']
                }
            }
        },
        less: {
            style: {
                files: {
                    "public/css/style.css": "less/style.less"
                }
            }
        },
        watch: {
            js: {
                files: ['javascript*//*.js'],
                tasks: ['concat:js', 'uglify:js'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['less*//*.less'],
                tasks: ['less:style'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
*/

    grunt.initConfig({
        jshint: {
            src: ['Gruntfile.js', 'js/*.js', 'src/config.js', 'tests/app/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    require: true,
                    define: true,
                    requirejs: true,
                    describe: true,
                    expect: true,
                    it: true
                }
            }
        }
    });

    // Load JSHint task
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', 'jshint');
};
