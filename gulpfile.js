const gulp = require('gulp');
/* Adding Task */ 
gulp.task('test-task',()=>{
   try{

      return console.log('task has been created successfully');
   }catch(err){
      console.log('error');
   }
});