require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const { OPENAI_API_KEY } = process.env;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());
app.post("/create", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createImage({
      prompt,
      n: 5,
      size: "512x512",
    });
    console.log(response.data.data);
    res.send(response.data.data);
  } catch (err) {
    res.send(err);
  }
});
app.listen(8080, () => {
  console.log("server started");
});