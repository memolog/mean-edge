module.exports = {
  "port": 8000,
  "files": ["../nginx/static/index.html","../nginx/static/js/*.{js}", "../nginx/static/css/*.{css}"],
  "server": { "baseDir": "../nginx/static" }
}