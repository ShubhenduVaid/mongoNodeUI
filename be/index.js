const express = require("express");
const cors = require("cors");

const { insertData, getData } = require("./mongo");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.get("/fetchData", async (req, res) => {
  const data = await getData();
  res.send(JSON.stringify(data));
});

app.post("/", async (req, res) => {
  await insertData(req.body);
  res.send(JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
