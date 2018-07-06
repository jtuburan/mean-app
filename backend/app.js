const express = require('express');
const app = express();


app.use('/api/posts',(req, res, next) => {
    const posts = [
        {
            id: '123',
            title: 'first server side post',
            content: 'this is coming from the server'
        },
        {
            id: '456',
            title: 'second server side post',
            content: 'this is coming from the server!'
        }
    ];
    
    res.status(200).json({
        message: 'Post fetched succesfully',
        posts: posts
    });
});

module.exports = app;