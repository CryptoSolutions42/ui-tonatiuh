import React, { useEffect, useRef } from 'react';
import { ColorType, createChart, CrosshairMode, LineStyle } from 'lightweight-charts';

import { StyledTradingViewChart } from './styled/TradingViewChart.styled';
import { getCandlestickData } from '../../../../utils/helper';
import { OrderType } from '../../../../redux/types';

export const TradingViewChart = ({
  symbol,
  interval,
  orders = [],
}: {
  symbol: string;
  interval: string;
  orders?: OrderType[];
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const orderLinesRef = useRef<any[]>([]);

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

    const updateOrderLines = () => {
      orderLinesRef.current.forEach((line) => candlestickSeries.removePriceLine(line));
      orderLinesRef.current = [];

      orders.forEach((order) => {
        const orderLine = candlestickSeries.createPriceLine({
          price: order.price,
          color: order.side === 'buy' ? '#12a7a2' : '#d13159',
          lineWidth: 2,
          lineStyle: LineStyle.Dashed,
          axisLabelVisible: true,
          title: `${order.side} @ ${order.price}`,
        });
        orderLinesRef.current.push(orderLine);
      });
    };

    const fetchData = async () => {
      const data = await getCandlestickData(symbol, interval);
      console.log('Candlestick Data:', data);
      candlestickSeries.setData(data);
      updateOrderLines();
    };

    fetchData();
    const intervalId = setInterval(fetchData, 20000);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);
    updateOrderLines();

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      orderLinesRef.current.forEach((line) => candlestickSeries.removePriceLine(line));
      chart.remove();
    };
  }, [symbol, interval, orders]);

  return <StyledTradingViewChart ref={chartContainerRef} />;
};
