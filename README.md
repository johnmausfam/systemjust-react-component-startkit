# React component startkit #


----------

## setup ##

1. clone this repository.
2. run **npm run init_startkit** to create dir structure.

## run dev server ##

1. edit webpack.dev.config.js
2. run **npm run example** 

## buid and publish ##

1. run **npm run build**,file will build and copy to dist/
2. check dist folder
3. edit package.json(name,version,author...etc.)
4. run **npm publish**

## dir structure ##

assets : for images or other static files
css    : css file here
scss   : scss and sass file here(compile to css file and copy to dist/css/ when build this package)