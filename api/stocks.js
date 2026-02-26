export default async function handler(req, res) {
  const apiKey = "7815da7ac2ab43ca8f4a4b73e10eb5ca"; // your Twelve Data key
  const symbols = ["AAPL", "AMZN", "GOOGL", "MSFT"];
  
  try {
    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const response = await fetch(
          `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`
        );
        const data = await response.json();
        return { symbol, price: data.price };
      })
    );

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
}
