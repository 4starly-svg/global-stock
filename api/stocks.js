export default async function handler(req, res) {
  const apiKey = "D6A0RQ1R01QSJLBN99SSGD6A0RQ1R01QSJLBN99ST0";
  const symbols = ["AAPL", "AMZN", "GOOGL", "MSFT"];

  try {
    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
        );
        const data = await response.json();
        return { symbol, ...data };
      })
    );

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
}
