# TestI18nNg14

## Replicate error

Just run: `npm run extract` and see:

```./dist/test/lib/fesm2020/test-lib.mjs - Error: Module build failed (from ./node_modules/@angular-devkit/build-angular/src/builders/extract-i18n/ivy-extract-loader.js):
TypeError: Cannot create property 'message' on string 'dist\test\lib\fesm2020\test-lib.mjs: Unexpected messageParts for `$localize` (expected an array of strings).
   8 | class LibModule {
   9 |   static forRoot() {
> 10 |     const dddd2 = $localize(_t || (_t = _`:Message defined placeholder:Message not present`));
     |                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  11 |     console.log("sssss", dddd2);
  12 |     return {
  13 |       ngModule: LibModule,'
    at run (xxx\node_modules\@angular\localize\node_modules\@babel\core\lib\transformation\index.js:39:15)
    at run.next (<anonymous>)
    at transform (xxx\node_modules\@angular\localize\node_modules\@babel\core\lib\transform.js:25:41)
    at transform.next (<anonymous>)
    at evaluateSync (xxx\node_modules\gensync\index.js:251:28)
    at sync (xxx\node_modules\gensync\index.js:89:14)
    at MessageExtractor.extractMessages (file:///D:/Projects/daButtare/test_i18n_ng14/node_modules/@angular/localize/tools/bundles/chunk-CWHUJIHG.js:122:7)
    at extract (xxx\node_modules\@angular-devkit\build-angular\src\builders\extract-i18n\ivy-extract-loader.js:123:32)
```

## Make it works
See file `.browserslistrc` and comment `not dead`
