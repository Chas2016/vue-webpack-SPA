/**
 * Created by chen on 2016/9/30.
 */
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

app.use(devMiddleware);

app.listen(8080,function(err) {
    if(err) {
        console.log(err);
        return ;
    }
    console.log('Listening at http://localhost:8080');
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});