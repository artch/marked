module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            src: {
                files: [
                    {src: ['lib/marked.js'], dest: 'build/marked.js'}
                ]
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            src: {
                files: {
                    'build/marked.min.js': ['build/marked.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy:src', 'uglify:src']);
};
