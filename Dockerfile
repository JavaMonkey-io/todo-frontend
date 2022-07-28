FROM nginx:alpine
COPY build /usr/share/nginx/html
COPY docker /docker
EXPOSE 8080
CMD ["sh", "-c", "cd /usr/share/nginx/html/ && /tmp/set-env.sh && nginx -g 'daemon off;'"]