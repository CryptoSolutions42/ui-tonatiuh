import axios from 'axios';

export async function getCandlestickData(symbol: string, interval: string) {
  try {
    const validIntervals = ['1m', '3m', '5m', '15m', '30m', '1H', '2H', '4H', '6H', '12H', '1D', '1W', '1M'];
    if (!validIntervals.includes(interval)) {
      throw new Error(`Invalid interval: ${interval}. Valid intervals are: ${validIntervals.join(', ')}`);
    }

    const response = await axios.get(
      `https://www.okx.com/api/v5/market/candles?instId=${symbol}&bar=${interval}&limit=300`,
    );
    console.log('API Response:', response.data);
    const data = response.data.data
      .flatMap((candle: string[]) => ({
        time: +candle[0] / 1000,
        open: parseFloat(candle[1]),
        high: parseFloat(candle[2]),
        low: parseFloat(candle[3]),
        close: parseFloat(candle[4]),
        value: parseFloat(candle[5]),
      }))
      .sort((a, b) => a.time - b.time);

    return data;
  } catch (error) {
    console.error('Error fetching data from OKX API:', error);
    return [];
  }
}

export function convertSymbol(symbol: string): string {
  return symbol.split('/').join('-');
}

export function startsWithIs(str: string): boolean {
  return str.substring(0, 2) === 'is';
}
