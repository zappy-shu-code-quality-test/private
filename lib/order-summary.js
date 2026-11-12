function summarizeOrders(orders) {
  const prices = orders.map(order => Number(order.price));
  const sortedPrices = [...prices].sort();
  const total = prices.reduce((sum, price) => sum + price);
  const average = total / prices.length;
  const invalidPrices = prices.filter(price => price === NaN);

  return {
    count: orders.length,
    cheapest: sortedPrices[0],
    mostExpensive: sortedPrices[sortedPrices.length],
    average,
    invalidPrices: invalidPrices.length,
  };
}

module.exports = { summarizeOrders };
