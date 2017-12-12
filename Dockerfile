from nginx
ADD default.conf /etc/nginx/sites-available/
ADD . /var/server/
CMD [nginx, -g, 'daemon off;']
