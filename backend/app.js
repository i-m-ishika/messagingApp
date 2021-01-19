const express = require('express');
const body_parser = require('body-parser');

const app = express();

app.use(body_parser.json());

//middleware for CORS
app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/posts", (request, response, next)=>{
  const post = request.body;
  console.log(post);
  response.status(201).json({
    message: "Post added!"
  });
  next();

});

app.get('/posts', (request, response, next)=>{
  const posts = [
    {
      id: 'as1',
      title: 'First Server Post',
      content: 'This is the first post.'
    },
    {
      id: 'ax12',
      title: 'Second Server Post',
      content: 'This is the second post.'
    },
    {
      id: 'ax23',
      title: 'Third Server Post',
      content: 'This is the third post.'
    }];
  response.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});

module.exports = app;
