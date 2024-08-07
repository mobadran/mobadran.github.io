const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function compileSass() {
    return gulp.src('scss/**/*.scss') // Path to your SCSS files
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css')) // Output directory for CSS files
        .pipe(browserSync.stream()); // Inject CSS changes without a full page reload
}

function watchFiles() {
    gulp.watch('scss/**/*.scss', compileSass); // Watch SCSS files for changes
    gulp.watch('*.html').on('change', browserSync.reload); // Watch HTML files for changes
    gulp.watch('dist/js/*.js').on('change', browserSync.reload); // Watch HTML files for changes
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watchFiles(); // Start the file-watching task
}

gulp.task('sass', compileSass);
gulp.task('watch', gulp.series(compileSass, browsersync));