// api/news.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3001;

// Your Twelve Data API key
const apiKey = "7815da7ac2ab43ca8f4a4b73e10eb5ca";

app.get("/api/news", async (req, res) => {
  try {
    // Fetch the latest news from Twelve Data
    const response = await fetch(`https://api.twelvedata.com/news?apikey=${apiKey}`);
    const data = await response.json();

    // Take the first 5 news items
    const newsItems = data.news
      ? data.news.slice(0, 5).map(item => ({
          headline: item.title,
          url: item.url,
          published: item.published_at
        }))
      : [];

    res.json(newsItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to load news" });
  }
});

app.listen(PORT, () => {
  console.log(`News API running on port ${PORT}`);
});
