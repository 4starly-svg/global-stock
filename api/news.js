export default async function handler(req, res) {
  const apiKey = "D6A0RQ1R01QSJLBN99SSGD6A0RQ1R01QSJLBN99ST0";

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
    );
    const data = await response.json();

    res.status(200).json(data.slice(0, 5)); // only return top 5 news
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
