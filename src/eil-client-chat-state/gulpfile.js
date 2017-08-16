const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const importTasks = require('../../gulp-tasks');

const plugins = loadPlugins({ config: '../../package.json' });
const tasks = importTasks(gulp, plugins);

gulp.task('clean', tasks.clean);
gulp.task('develop', tasks.develop);
gulp.task('compile', tasks.compile);
