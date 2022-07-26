# TODO Frontend

## Developing
Install necessary packages with:
```
yarn install
```

Start development server:
```
yarn start
```


## Building Docker Image
```
yarn build
docker build -t frontend .
```

## Running Docker Image
```
docker run -it --rm /
  -p 8081:80 /
  -e API_URI=http://localhost:8080 /
  todo-frontend

```
API_URI - Defines where your Backend server is