"use strict";
const { response } = require("express");
const expressModule = require("express");
const fs = require("fs");

const app = expressModule();

const Joi = require("joi");
const cors = require("cors");

app.use(expressModule.json());
// Json file content reading_______________
let rawdata = fs.readFileSync("data.json");
let json_data = JSON.parse(rawdata);

let hjj = 0;
for (var i in json_data) hjj = hjj + 1;
const arr_projects = json_data[i];

// ________________________________________

const accounts = [
  {
    id: 1,
    first_name: "Abdullah",
    last_name: "Dogar",
    password: "3287492",
    country: "USA",
  },
];

app.options("/addaccount", cors());

app.get("/projects", (request, response) => {
  console.log("/projects page accessed");
  response.header("Access-Control-Allow-Origin", "*");
  response.send(arr_projects);
  // response.send(projects);
});

app.post("/addaccount", (req, response) => {
  console.log("Post method called");
  console.log(req.body);
  console.log(
    "______________________________________________________________________"
  );
  // console.log(req.body.project_description);
  //console.log(req.body.Budget);
  response.header("Access-Control-Allow-Origin", "*");
  const new_account = {
    id: accounts.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    country: req.body.country,
  };

  // const error = validate_project(new_account);

  // if (error) {
  //   console.log(error);
  //   //    res.send("Error occured: " + error);
  //   //    res.send(error);
  //   res.send(error.details[0].message);
  //   return;
  // }

  accounts.push(new_account);

  // console.log("All account info === " + accounts);
  response.send(new_account);
});

// function validate_project(n_project) {
//   const schema = Joi.object({
//     id: Joi.number().integer().min(1).max(50).required(),
//     title: Joi.string().min(3).max(100).alphanum().required(),
//   });

//   const result = schema.validate(n_project);

//   return result.error;
// }

app.listen(3000, () => {
  console.log("Server started: Listening at port 3000");
});
