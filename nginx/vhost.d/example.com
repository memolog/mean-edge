location /static {
    root /var/www;
    index index.html index.htm;
}
