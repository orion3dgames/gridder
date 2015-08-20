module.exports = function (grunt) {

    grunt.initConfig({
        // Import package manifest
        pkg: grunt.file.readJSON("package.json"),
        // Banner definitions
        meta: {
            banner: "/*\n" +
                    " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                    " *  <%= pkg.description %>\n" +
                    " *  <%= pkg.homepage %>\n" +
                    " *\n" +
                    " *  Made by <%= pkg.author.name %>\n" +
                    " *  Under <%= pkg.license %> License\n" +
                    " */\n"
        },
        // Concat definitions
        concat: {
            options: {
                banner: "<%= meta.banner %>"
            },
            dist: {
                src: ["src/jquery.gridder.js"],
                dest: "dist/js/jquery.gridder.js"
            }
        },
        // Lint definitions
        jshint: {
            files: ["src/jquery.gridder.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        // Minify definitions
        uglify: {
            my_target: {
                src: ["dist/js/jquery.gridder.js"],
                dest: "dist/js/jquery.gridder.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },
        // CoffeeScript compilation
        coffee: {
            compile: {
                files: {
                    "dist/js/jquery.gridder.js": "src/jquery.gridder.coffee"
                }
            }
        },
        // SASS
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/jquery.gridder.min.css': 'scss/jquery.gridder.scss',
                    'demo/css/demo.css': 'demo/scss/demo.scss'
                }
            }
        },
        // watch for changes to source
        // Better than calling grunt a million times
        // (call 'grunt watch')
        watch: {
            files: ['src/*', 'scss/*', 'demo/scss/*'],
            tasks: ['default']
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask("build", ["concat", "uglify"]);
    grunt.registerTask("default", ["jshint", "build", "sass"]);
    grunt.registerTask("travis", ["default"]);

};
