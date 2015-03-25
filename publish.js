var gulp = require('gulp');
var decompress = require('gulp-decompress');
var download = require('gulp-download');

var url = 'https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/jetpack-sdk-latest.tar.gz'

download(url)
    .pipe(decompress({
        strip: 1   
    }))
    .pipe(gulp.dest('./addon-sdk'))
