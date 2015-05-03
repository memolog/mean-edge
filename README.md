# mean-edge
This is my personal sandbox to use cutting-edge features around MEAN

### NOTES
#### install global dependencies (required building angular2)
```
[sudo] npm install -g protractor
[sudo] npm install -g gulp
[sudo] npm install -g typescript@^1.5.0-beta
[sudo] npm install -g tsd@next
```

#### installation app
```
git clone https://github.com/memolog/mean-edge.git
npm install
```

#### start server
```
node server.js
```

#### get angular2 file with all dependencies
```
cd node_modules/angular
gulp bundle.js.dev.deps
cp dist/angular.dev.js ../../public/static/lib/angular2/
```

#### transpile My app
```
tsc src/public/static/site/app.ts --target es6 --outDir public/static/site/
```
