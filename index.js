import express from "express";
import { message } from  './db/core.js';

const app = express();

app.get("/", function(request, response){
    response.send(`<h2>${message}</h2>`);
});


app.listen(3001, (err) => {
  if (err) {
    throw new Error("Ошибка какая то");
  }
  console.log("server work!");
});
