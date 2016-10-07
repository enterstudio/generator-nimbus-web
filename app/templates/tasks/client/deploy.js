import gulp from 'gulp';
import sftp from 'gulp-sftp';
import {base, tasks} from './const';

gulp.task(tasks.CLIENT_DEPLOY__PRIVATE, () => {
   return gulp.src(base.DIST)
               .pipe(sftp({
                    host: 'host-addr',
                    port: 22,
                    auth: 'key',
                    removePlatform: 'unix',
                    remotePath: '/var/www/sistema-admin/'
                }));
});