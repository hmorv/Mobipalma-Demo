module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    //uglify
    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      js: {
        files: [
        {
          src: 'js/*.js',
          dest: 'js/min/'
        },
        {
          src: 'scripts/controllers/aparcamientos/*.js',
          dest: 'scripts/controllers/min/aparcamientos/'
        },
        {
          src: 'scripts/controllers/avisos/*.js',
          dest: 'scripts/controllers/min/avisos/'
        },
        {
          src: 'scripts/controllers/bicipalma/*.js',
          dest: 'scripts/controllers/min/bicipalma/'
        },
        {
          src: 'scripts/controllers/camaras/*.js',
          dest: 'scripts/controllers/min/camaras/'
        },
        {
          src: 'scripts/controllers/estacioneselectricas/*.js',
          dest: 'scripts/controllers/min/estacioneselectricas/'
        },
        {
          src: 'scripts/controllers/header/*.js',
          dest: 'scripts/controllers/min/header/'
        },
        {
          src: 'scripts/controllers/home/*.js',
          dest: 'scripts/controllers/min/home/'
        },
        {
          src: 'scripts/controllers/lineas/*.js',
          dest: 'scripts/controllers/min/lineas/'
        },
        {
          src: 'scripts/controllers/paradas/*.js',
          dest: 'scripts/controllers/min/paradas/'
        },
        {
          src: 'scripts/controllers/paradastaxi/*.js',
          dest: 'scripts/controllers/min/paradastaxi/'
        },
        {
          src: 'scripts/controllers/token/*.js',
          dest: 'scripts/controllers/min/token/'
        },
        {
          src: 'scripts/controllers/trayectos/*.js',
          dest: 'scripts/controllers/min/trayectos/'
        },
        {
          src: 'scripts/factories/*.js',
          dest: 'scripts/min/factories/'
        },
        {
          src: 'scripts/services/*.js',
          dest: 'scripts/min/services/'
        }
        //{
          //cwd: 'scripts/controllers',
          //expand: true,
          // src: '*.js',
          // dest: 'scripts/controllers/min/'
        //}
        ]
      }
    }
  });

 // loadNpmTasks
 grunt.loadNpmTasks('grunt-contrib-uglify');

 // Run Default task(s).
 grunt.registerTask('default', ['uglify']);
};
