# About the project

R-Art Js is a React project made for study purposes where there fictional users with their arts posted. All images were made by myself, including the profile pictures. 
In this project you can look at the homepage where all the images are avaible. In the navbar, you use the search-bar to search for images with something specific in their description. There are profile pages showing the user's arts, followers and the people he follows. The post page you can who liked and the comments.
You can't post anything there and login because there is no connection to any database. All data is stored in a json file.

It's possible to run the project by having Node.js or Docker installed in your computer. The commands are differents, but the url is the same: 

### `http://localhost:3000/`

## Node.js

With this package installed, there is one command necessary to run the project:

### `npm start`

## Docker

First you need to build the image defined in Dockerfile with the command:

### `docker build -t r-art-js-image .`

Then you have to run the container defined in 'docker-compose.yml' by using this command:

### `docker-compose up`