# mean-edge
This is my personal sandbox to use cutting-edge features around MEAN (actually possibly included non-MEAN stack)

### NOTES

#### install Node.js
use official installer https://nodejs.org/download/ 

or use homebrew http://brew.sh/ ```brew install node```

or use nvm https://github.com/creationix/nvm ```nvm istall 0.12```

#### install npm global dependencies (required building angular2)
```
[sudo] npm install -g protractor
[sudo] npm install -g gulp
[sudo] npm install -g typescript@^1.5.0-beta
[sudo] npm install -g tsd@next
[sudo] npm install -g bower
```

#### install my app
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

### What I like to do next
- [ ] use Broccoli task runner
- [ ] use material design with polymer
- [ ] routing with Angular new router
- [ ] add authentication and use MongoDB
- [ ] use service worker
- [ ] touch nginx
- [ ] touch Docker
- [ ] touch some cloud service
- [ ] touch React
- [ ] touch Dart
