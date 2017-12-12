from nginx
COPY ./dist_site /usr/share/nginx/html
CMD /bin/bash -c "nginx, -g, 'daemon off;'"
