# MEAN-EDGE
This is my personal sandbox to use cutting-edge features around MEAN (actually possibly included non-MEAN stack)

### Install prerequisites
#### Install Node
MEAN-EDGE works with Node.js version 6.0.0 (current latest stable)

use official installer https://nodejs.org/download/

or use homebrew http://brew.sh/ ```brew install node```

or use nvm https://github.com/creationix/nvm ```nvm istall 6.0.0```

#### Keep npm latest stable
current latest stable is 3.8.6.
If you need to update npm itself, do the following

```
npm update npm -g
```

#### Install MongoDB
If you want to use MongoDB in your local dev, You have to install it.
see https://www.mongodb.org/downloads#production 

After installation, you run ```mongod``` and start mongoDB

### Install MEAN-EDGE
```
git clone https://github.com/memolog/mean-edge.git
cd mean-edge
npm install
```

### Development
#### Install global dependencies for development
No dependencies for global, MEANEDGE installs all development dependencied into node_modules and use them from npm scripts. 

#### Start backend server (development)
```
cd backend
npm run dev
```

You can see the 'Backend works!' message at http://localhost:3000/test 
If some source ts files changed, The dev script automatically compile them and restart server.

#### Start frontend server (development)
```
cd frontend
npm run dev
```

You can see http://localhost:8000/
If some source ts/scss files changed, The dev script automatically compile them and restart server.

### Using Docker Machine
#### Install Docker Toolbox
see https://www.docker.com/products/docker-toolbox and install it

After install Docker Toolbox, start Docker Machine
```
docker-machine start
```

#### Build MEANEDGE Docker Containers
##### Build backend container
```
cd backend
docker build -t mean-edge-backend .
```

##### Build frontend(nginx) container
```
cd nginx
docker build -t mean-edge-nginx .
```

The mean-edge-nginx container is based on https://github.com/jwilder/nginx-proxy 

#### Run a new mongoDB container
```
docker run --name mongo mongo:latest
```

#### Run a new mean-edge containers
```
docker run -d -p 80:80 --name nginx -v /var/run/docker.sock:/tmp/docker.sock:ro mean-edge-nginx
docker run --name app --link mongo:mongo -e VIRTUAL_HOST=example.com mean-edge-backend
```

#### Open the site
MEANEDGE uses 'example.com' as a virutual host defaultly, so add it in your local /etc/hosts as follows

First, get docker-machine ip as follows
```
docker-machine ip
```

And then, add example.com with the above ip in your /etc/hosts, like
```
192.168.99.100 example.com
```

open http://example.com with your browser, you can see the MEANEDGE site
open http://example.com/test, you can see the backend response

#### Stop your docker containers
```
docker kill app nginx mongo 
```

#### Remove your docker containers
```
docker rm app nginx mongo
```

#### Remove your docker images
```
docker rmi mean-edge-nginx mean-edge-backend mongo:latest
```

### Using Docker Cloud (with AWS)
1. Create three nodes like, lb, server and db
2. Create mongdb service
  1. Move Services
  2. Push 'Create Service' button
  3. Choose mongo in Database servers at Jumpstarts
  4. Add Deploy tags 'db'
  5. Add Ports 27017 as a published port
  6. Create and deploy
3. Create nginx service
  1. Move Services
  2. Push 'Create Service' button
  3. Choose mean-edge-nginx from 'My repositories'
  4. Add Deploy tags 'server'
  5. Add Ports 80 as a published port
  6. Set Volumes PATH:/tmp/docker.sock, Host Path: /var/run/docker.sock (not writable)
  7. Create and Deploy
4. Create backend service
  1. Move Services
  2. Push 'Create Service' button
  3. Choose mean-edge-backend from 'My repositories'
  4. Add Deploy tags 'server'
  5. Add Ports 3000 as a published port
  6. Set Environment variables VIRTUAL_HOST, your_host (example.com)
  7. Add links mongodb service created at step 2, must set alias name to 'mongo'
  8. Create and Deploy
5. Create haproxy(lb) service
  1. Move Services
  2. Push 'Create Service' button
  3. Choose dockercloud/haproxy in Proxies at Jumpstarts
  4. Add Deploy tags 'lb'
  5. Add Ports 80 as a published port
  6. Add links mean-edge-nginx service created at step 3
  7. Create and Deploy