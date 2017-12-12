from nginx
ADD default.conf /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/default.conf
ADD . /var/server/
CMD /bin/bash -c "nginx, -g, 'daemon off;'"
