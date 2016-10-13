import gulp from 'gulp';
import ftp from 'vinyl-ftp';
import {base, tasks} from './const';
import fs from 'fs';

gulp.task(tasks.CLIENT_DEPLOY__PRIVATE, () => {
   const ARQUIVOS = base.DIST + '**/*';
   
   const _auth = JSON.parse(fs.readFileSync(__dirname + '/.ftppass').toString());
   const _conn = ftp.create({
                    host: '10.10.10.10',
                    port: 22,
                    user: _auth.user,
                    password: _auth.password,
                    parallel: 10,
                    log: console.log
                });
	
   return gulp.src(ARQUIVOS)
              .pipe(_conn.dest('/var/www/sistema-admin'))
              .on('error', (err) => {
                console.log(err);
              })
              .on('end', () => {
                console.log('uploaded');
              });
});