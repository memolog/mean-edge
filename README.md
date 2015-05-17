# mean-edge
This is my personal sandbox to use cutting-edge features around MEAN (actually possibly included non-MEAN stack)

### NOTES
#### Install Node.js
use official installer https://nodejs.org/download/

or use homebrew http://brew.sh/ ```brew install node```

or use nvm https://github.com/creationix/nvm ```nvm istall 0.12```

#### Install npm global dependencies
```
[sudo] npm install -g gulp
[sudo] npm install -g typescript@^1.5.0-beta
[sudo] npm install -g tsd@next
[sudo] npm install -g bower
```

I use jspm to resolve some angular dependencies (system.js, rx, traceur and zone.js).
You don't have to install jspm to use this repository since all of the dependencies are in the repository already.
```
[sudo] npm install -g jspm
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

#### transpile angular2 files into ES5
```
cd node_modules/angular2
npm install
cd es6/dev
node es5build.js -d ../../es5
```

#### bunld my app with angular2 and zone.js
```
cd public/static
jspm bundle site/app + zone.js app.js --inject
```

unbundle
```
jspm unbundle
```

#### Build angular2 bundle with all dependencies
Before install angular2 code from https://github.com/angular/angular, you might need to install protractor and tsd becuase they are required in the postinstall process

```
[sudo] npm install -g protractor
[sudo] npm install -g tsd@next
```

```
npm install angular/angular
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

#### use Docker
install Docker and Docker Compose
* http://docs.docker.com/installation/mac/
* http://docs.docker.com/compose/install/

Move to the cloned project(mean-edge) top directory and then
```
docker-compose up
```

You will wait a few second because a lot of resources are downloading and installing into Docker components.

After finishied, you can check the local server is running.
Copy the ip address retrieved with the above command, and Paste it to the browser

```
boot2docker ip
```

After you access the local server, you can see nginx logs in the terminal.

If You want to stop docker components, execut ```docker-compose stop``` or Control+C in the terminal.

### What I like to do next
- [ ] use material design with polymer
- [ ] routing with Angular new router
- [ ] add authentication and use MongoDB
- [ ] use service worker
- [ ] touch some cloud service
- [ ] touch React
- [ ] touch Dart
- [ ] touch Broccoli
