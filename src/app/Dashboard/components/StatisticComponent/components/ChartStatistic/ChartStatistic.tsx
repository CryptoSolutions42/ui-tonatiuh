import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface ChartStatisticProps {
  header: string;
  balance: number[];
  isVisible: boolean;
  onToggle: () => void;
}

const ChartContainer = styled.div`
  background: rgb(26, 28, 31);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin: 20px;
  width: max-content;
  height: max-content;

  svg {
    display: block;
  }

  .line {
    fill: none;
    stroke: #12a7a2;
    stroke-width: 2;
  }

  .axis {
    color: #bab9b9;
  }

  .dot {
    fill: #12a7a2;
    transition: r 0.2s ease;
    &:hover {
      r: 6;
      fill: #15c4be;
    }
  }
`;

export const ChartStatistic: React.FC<ChartStatisticProps> = ({ header, balance, isVisible, onToggle }) => {
  const { t } = useTranslation();
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (balance.length === 0 || !chartRef.current) return;

    // Очищаем предыдущий график
    d3.select(chartRef.current).selectAll('*').remove();

    // Размеры графика
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Создаем SVG контейнер
    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Подготавливаем данные
    const data = balance.map((b, index) => ({
      index,
      value: b,
    }));

    // Создаем scales
    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.value) || 0, d3.max(data, (d) => d.value) || 0])
      .range([height, 0]);

    // Создаем линию
    const line = d3
      .line<{ index: number; value: number }>()
      .x((d) => x(d.index))
      .y((d) => y(d.value))
      .curve(d3.curveMonotoneX);

    // Добавляем оси
    svg.append('g').attr('class', 'axis').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));

    svg.append('g').attr('class', 'axis').call(d3.axisLeft(y));

    // Добавляем линию
    svg.append('path').datum(data).attr('class', 'line').attr('d', line);

    // Добавляем точки
    svg
      .selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => x(d.index))
      .attr('cy', (d) => y(d.value))
      .attr('r', 4)
      .style('fill', '#12a7a2');
  }, [balance]);

  return (
    <ChartContainer>
      <h3 style={{ color: '#addadd' }}>{header}</h3>
      <svg ref={chartRef}></svg>
    </ChartContainer>
  );
};
