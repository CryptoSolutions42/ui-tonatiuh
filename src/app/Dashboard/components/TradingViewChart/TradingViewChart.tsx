import React, { useEffect, useRef } from 'react';
import { ColorType, createChart, CrosshairMode, LineStyle } from 'lightweight-charts';

import { StyledTradingViewChart } from './styled/TradingViewChart.styled';
import { getCandlestickData } from '../../../../utils/helper';

export const TradingViewChart = ({ symbol, interval }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      autoSize: true,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      layout: {
        background: {
          type: ColorType.VerticalGradient,
          bottomColor: 'rgb(26, 28, 31)',
          topColor: 'rgb(26, 28, 31)',
        },
        textColor: '#bab9b9',
      },
      grid: {
        vertLines: {
          color: 'rgba(63, 65, 71, 0.5)',
          style: LineStyle.Dotted,
        },
        horzLines: {
          color: 'rgba(63, 65, 71, 0.5)',
          style: LineStyle.Dotted,
        },
      },
      handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
      },
      handleScale: {
        axisPressedMouseMove: true,
        mouseWheel: true,
        pinch: true,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#12a7a2',
      borderUpColor: '#12a7a2',
      wickUpColor: '#12a7a2',
      downColor: '#d13159',
      borderDownColor: '#d13159',
      wickDownColor: '#d13159',
    });

    const fetchData = async () => {
      const data = await getCandlestickData(symbol, interval);
      console.log('Candlestick Data:', data);
      candlestickSeries.setData(data);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 20000);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [symbol, interval]);

  return <StyledTradingViewChart ref={chartContainerRef} />;
};
