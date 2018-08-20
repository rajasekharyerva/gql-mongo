//import express from 'express';
const express = require("express");
//import graphqlHTTP from 'express-graphql';
const graphqlHTTP = require("express-graphql");
//import schema from './graphql';
const schema = require("./graphql");
//import mongoose from 'mongoose';
const mongoose = require("mongoose");

var app = express();

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  //pretty: true, //order changed
  graphiql: true,
  pretty: true
})));

// Connect mongo database
//var db = mongoose.connect('mongodb://mongo/graphql');
mongoose.connect('mongodb://localhost:27017/local');

{/*db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
});*/}

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});