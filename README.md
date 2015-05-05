# mean-edge
This is my personal sandbox to use cutting-edge features around MEAN (actually possibly included non-MEAN stack)

### NOTES
#### Install Node.js
use official installer https://nodejs.org/download/

or use homebrew http://brew.sh/ ```brew install node```

or use nvm https://github.com/creationix/nvm ```nvm istall 0.12```

#### Install npm global dependencies
```
[sudo] npm install -g protractor
[sudo] npm install -g gulp
[sudo] npm install -g typescript@^1.5.0-beta
[sudo] npm install -g tsd@next
[sudo] npm install -g bower
```

#### Install my app
```
git clone https://github.com/memolog/mean-edge.git
npm install
```

#### Start server
```
gulp nodemon
```

or just initiate server.js
```
node server.js
```

#### Start server in development
```
gulp development
```

Start server with gulp nodemon task, and then watching file changes with gulp watch task.

#### Get angular2 file with all dependencies
```
cd node_modules/angular
gulp bundle.js.dev.deps
cp dist/angular.dev.js ../../public/static/lib/angular2/
```

##### Trouble Shooting
If you found a lot of typescritp errros such like ``` 1153 'let' declarations are only available when targeting ECMAScript 6 and higher.```, check angular2/node_modules/typecsript version. If you could find its version is 1.4.1, npm install typescript again in the angular2 directory.

That is what it happened on me, but I'm not sure why I got the wrong version of typescript. Anyway, as far as you use typescript 1.5 higher, It should work fine.

```
cd node_modules/angular
npm install typescript
```

#### Transpile Typescript to Javascript

use gulp
```
gulp build.public.js
```

or use global tsc
```
tsc src/public/static/site/app.ts --target es6 --outDir public/static/site/
```

### What I like to do next
- [ ] use material design with polymer
- [ ] routing with Angular new router
- [ ] add authentication and use MongoDB
- [ ] use service worker
- [ ] touch nginx
- [ ] touch Docker
- [ ] touch some cloud service
- [ ] touch React
- [ ] touch Dart
- [ ] touch Broccoli
