from nginx
COPY ./dist-site /usr/share/nginx/html
CMD /bin/bash -c "nginx, -g, 'daemon off;'"
