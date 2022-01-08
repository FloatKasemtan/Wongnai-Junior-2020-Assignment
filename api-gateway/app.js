const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const port = 8080;
const url = "http://localhost";

app.use(
  cors({
    origin: `${url}:3000`,
  })
);

app.get("/", async (req, res) => {
  axios
    .get(`${url}:9000/trips`)
    .then(() => {
      console.log("JSON server is ready");
    })
    .catch((e) => {
      console.log("JSON server could not be available");
      res.status(404).send(false);
    });
  res.status(200).send(true);
});

app.get("/trips", async (req, res) => {
  let { data: trips } = await axios.get(`${url}:9000/trips`);
  let query = req.query;
  let keyword = "";
  if (query.keyword) {
    keyword = query.keyword;
    let words = keyword.trim().split(" ");

    const filteredTrips = trips.filter((trip) => {
      trip.weight = 0;
      return words.every((word) => {
        tag = trip.tags.includes(word);
        tag && (trip.weight += 3);
        title = trip.title.includes(word);
        title && (trip.weight += 2);
        description = trip.description.includes(word);
        description && (trip.weight += 1);

        return tag || title || description;
      });
    });
    if (filteredTrips.length !== 0) {
      return res
        .status(200)
        .json(filteredTrips.sort((a, b) => b.weight - a.weight));
    }
    return res.status(404).json(filteredTrips);
  }

  return res.json(trips);
});

app.listen(port, () => {
  console.log(`app listening at ${url}:${port}`);
});

module.exports = app;
