import express from "express";
import { User } from  './db/core.js';

const app = express();

app.get("/", function(request, response){
    response.send(`<h2>just add data</h2>`);
});


app.listen(3001, (err) => {
  if (err) {
    throw new Error("ERROR");
  }
  console.log("server work!");
});
