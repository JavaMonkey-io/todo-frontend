FROM nginx:alpine
COPY build /usr/share/nginx/html
COPY --chmod=0755 docker/set-env.sh /docker
EXPOSE 8080
CMD ["sh", "-c", "cd /usr/share/nginx/html/ && /docker/set-env.sh && nginx -g 'daemon off;'"]