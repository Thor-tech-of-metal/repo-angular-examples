# Angular application example with docker

This is an example of Observable & Subject

## Install packaged 

```
npm install 
```
## Development server
```
npm start
```


## Build production dist
```
ng build --prod
```


## Build docker image and tag it 
```
docker build -t thor-it-consulting:v1 .
```


## Run docker image
```
docker run -p 80:80 thor-it-consulting:v1
```
