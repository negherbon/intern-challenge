module.exports = function(grunt){

    grunt.initConfig({
        copy: {
            public: {
                expand: true,
                cwd: 'public',
                src: ['**', '!**/less/**'],
                dest: 'dist'
            }
        },
        clean: {
            dist: {
                src: 'dist'
            },
            dist_unnecessary_files:{
                src: ['dist/css/prototype.css']
            }
        },
        useminPrepare: {
            html: 'dist/**/*.html' // Gera as configuracoes para as tasks concat, uglify e cssmin
        },
        usemin: {
            html: 'dist/**/*.html' // altera o nome do arquivo no html
        },
        less: {
            compilar: {
                expand: true,
                cwd: 'public/less',
                src: ['prototype.less'],
                dest: 'public/css',
                ext: '.css'
            }
        }
    });

    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.registerTask('minifica', ['useminPrepare', 'concat', 'cssmin', 'usemin']);
    grunt.registerTask('default', ['less', 'dist', 'minifica', 'clean:dist_unnecessary_files']);

    // carregando tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-less');

}