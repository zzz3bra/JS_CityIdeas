@echo on
copy /Y index.html public\
copy /Y systemjs.config.js public\
copy /Y app\*.js public\app\
copy /Y img\* public\img\
copy /Y css\* public\css\
copy /Y node_modules\* public\node_modules\