import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import axios from 'axios';

export const TradingViewChart = ({ symbol, interval }) => {
  const chartOptions = { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } } };

  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries();

    const fetchData = async () => {
      const data = await getCandlestickData(symbol, interval);
      console.log('Candlestick Data:', data);
      candlestickSeries.setData(data);
    };

    fetchData();

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [symbol, interval]);

  return (
    <div
      ref={chartContainerRef}
      style={{ marginRight: '20px', position: 'relative', width: '100%', height: '540px', borderRadius: '10px' }}
    />
  );
};

const getCandlestickData = async (symbol: string, interval: string) => {
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
        time: +candle[0],
        open: parseFloat(candle[1]),
        high: parseFloat(candle[2]),
        low: parseFloat(candle[3]),
        close: parseFloat(candle[4]),
      }))
      .sort((a, b) => a.time - b.time);

    return data;
  } catch (error) {
    console.error('Error fetching data from OKX API:', error);
    return [];
  }
};
