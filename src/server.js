import express from "express";
import personRouter from "./people/people.router";
import { connect } from "./connect";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

import { Person } from "./people/people.model";
import { NONAME } from "dns";

const PORT = 3000;
export const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/person", personRouter);

connect("mongodb://localhost:27017/codyNodeApi")
  .then(async connection => {
    const person = await Person.create({
      firstName: "Quest",
      lastName: "Jarrett",
      email: "questHJarrett@gmail.com",
      age: 0.1,
      highestEducation: 'nowhere',
      sex: "MALE"
    });
    console.log(person);
  })
  .catch(e => console.error(e));
