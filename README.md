# MEAN-EDGE
This is my personal sandbox to use cutting-edge features around MEAN (actually possibly included non-MEAN stack)

### Install prerequisites
#### Install Node
MEAN-EDGE works with Node.js version 5.3.0 (current latest stable)

use official installer https://nodejs.org/download/

or use homebrew http://brew.sh/ ```brew install node```

or use nvm https://github.com/creationix/nvm ```nvm istall 5.3.0```

#### Keep npm latest stable
current latest stable is 3.5.3.

```
npm update npm -g
```

### Quick Start
#### Install MEAN-EDGE
```
git clone https://github.com/memolog/mean-edge.git
cd mean-edge
npm install --production
```

#### Start server
```
npm start
```
You can see http://localhost:3000/

### Development
#### Install global dependencies for development
```
[sudo] npm install -g gulp // Streaming Build System
[sudo] npm install -g tsd // TypeScript Definition Manager
```

You might also need
```
[sudo] npm install -g webpack // Module Bundler
[sudo] npm install -g typescript // TypeScript
```

#### Install MEAN-EDGE for development
```
git clone https://github.com/memolog/mean-edge.git
cd mean-edge
npm install
npm run tsd-install // Install TypeScript Definitions
npm run webpack // Bundle modules
```

#### Start server in development
```
gulp develop
```

Start server with gulp nodemon task, and then watching file changes with gulp watch task.

### Using Docker
install Docker and Docker Compose
* http://docs.docker.com/installation/mac/
* http://docs.docker.com/compose/install/

#### Start Docker
If you didn't start boot2docker, start it first.
```
boot2docker start
```

#### Install with Docker Compose
Move to the cloned project(mean-edge) top directory and then
```
docker-compose up
```

If you already create docker containers and you want to update them, try ```docker-compose build```

You will wait a few second because a lot of resources are downloading and installing into Docker components.

After finishied, you can check the local server is running.
Copy the ip address retrieved with the above command, and Paste it to the browser

```
boot2docker ip
```

After you access the local server, you can see nginx logs in the terminal.

If You want to stop docker components, execut ```docker-compose stop``` or Control+C in the terminal.

##### Remove Docker Containers
```
docker-compose stop
docker-compose ps
docker-compose rm
```

##### Trouble Shooting
If you get 'no space left on device' error, you might have a lot of docker containers in your env. Run ```docker ps -a``` to check unnecessary containers, and remove them. If you want to remove all containers, do ``` docker rm `docker ps -a -q` ``` 

If you didn't get resolved yet, you might increase your docker vm (boot2docker for your mac) diskspace. Read https://ryanfb.github.io/etc/2015/01/28/increasing_boot2docker_allocations_on_os_x.html

(Or it's time to upgrade your local docker tool box https://docs.docker.com/mac/

### Some Notes (might be obsoluted)
#### Build angular2 bundle with all dependencies
Before install angular2 code from https://github.com/angular/angular, you might need to install protractor and tsd becuase they are required in the postinstall process

```
[sudo] npm install -g protractor
```

```
npm install angular/angular
cd node_modules/angular
gulp bundle.js.dev.deps
cp dist/angular.dev.js ../../public/static/lib/angular2/
```

#### (Old) TypeScript issue
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

#### NOTE to self: Webpack Code Splitting with TypeScript and Angular2
If you want to split code with webpack, the following introduction would help you
https://github.com/TypeStrong/ts-loader#user-content-loading-other-resources-and-code-splitting

According to the above, we must declare require.ensure and must not use moduleResolution:"node" option in the tscondig.json because its moduleResolution configure implicitly refers nodeRequire. And it conflicts with our own require.ensure declaration.

On the other hand, if we don't use moduleResolution:"node" and require angular2 module like reuiqre('../node_modules/angular2/core'), we cannot find some module defenitions inside angular2 module (so, we have to find them somehow).

#### Ideas about separating role between client and server
- server: render an agnostic data and cache it
- client: render authenticated or user/device specific data

### What I like to do next
- [ ] use material design with polymer
- [ ] routing with Angular new router
- [ ] add authentication and use MongoDB
- [ ] use service worker
- [ ] touch some cloud service
- [ ] touch React
- [ ] touch Dart
- [ ] touch Broccoli

### References
#### Angular 2
- https://angular.io/docs/ts/latest/quickstart.html
- https://github.com/AngularClass/angular2-webpack-starter
#### React (Server side)
- https://github.com/mhart/react-server-example
- https://egghead.io/lessons/react-introduction-to-server-side-react
#### TypeScript
- https://github.com/Microsoft/TypeScriptSamples/tree/master/imageboard
#### Bootstrap
- http://v4-alpha.getbootstrap.com/
#### Webpack
- Sass loader https://github.com/jtangelder/sass-loader
- PostCSS loader https://github.com/postcss/postcss-loader
- AutoPrefixer https://github.com/postcss/autoprefixer
- StyleSheet https://webpack.github.io/docs/stylesheets.html