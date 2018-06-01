# 使用技术 
## html jade 
    jade -w src/index.jade --out /
## css stylus
    stylus -w src/index.styl -o css/index.css
## js typescript
    tsc src/index.ts -w --outFile js/index.js
## postcss

    -  npm install postcss-cli autoprefixer
    -  postcss index.css -u autoprefixer --replace --watch --poll
    -   postcss css/index.css -u autoprefixer --replace
    -   .browserlistrc
    -  7.0.1
     -  ** Drop dependency on gulp-util
## gulp
    gulpfile.js
