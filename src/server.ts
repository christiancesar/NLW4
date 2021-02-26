import "reflect-metadata";
import express from "express";
import "./database"

const app = express();

app.use(express.json());

app.listen(3030, () => {
    console.log('Server listening!');
})