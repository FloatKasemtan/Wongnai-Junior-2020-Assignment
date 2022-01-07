const express = require("express");
const app = express();
const axios = require("axios");
const port = 8080;
const url = "http://localhost";

app.get("/trips", async (req, res) => {
  let { data: trips } = await axios.get(`${url}:9000/trips`);
  let query = req.query;
  let keyword = "";
  if (query.keyword) keyword = query.keyword;
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

  res.json(filteredTrips.sort((a, b) => b.weight - a.weight));
});

app.listen(port, () => {
  console.log(`app listening at ${url}:${port}`);
});
