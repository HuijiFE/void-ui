from nginx
ADD default.conf /etc/nginx/sites-available/
ADD . /var/server/
CMD /bin/bash -c "nginx, -g, 'daemon off;'"
