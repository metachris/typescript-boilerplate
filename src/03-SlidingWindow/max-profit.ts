export const maxProfit = (prices: number[]): number => {
  let profit = 0;
  let left = 0;
  let right = 1;

  while (left <= prices.length) {
    if (prices[right] > prices[left]) {
      profit = Math.max(prices[right] - prices[left], profit);
    } else {
      left = right;
    }
    right++;
  }
  return profit;
};
