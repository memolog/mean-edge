location ~ ^((/(js|css)/.*)|(/(index\.(html|htm))?)|(/favicon.ico)|(/manifest.json)|(/worker.js))$ {
    root /var/www/static;
    index index.html index.htm;
}

location ~ ^((/signup)) {
    rewrite .* / last;
}
