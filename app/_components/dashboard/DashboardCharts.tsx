import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DashboardChartProps {
  data: number[];
}

const DashboardChart: React.FC<DashboardChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // D3 code for creating a bar chart
    const svg = d3.select(svgRef.current);

    const width = 400;
    const height = 200;

    const xScale = d3.scaleBand()
      .domain(data.map((_, index) => index.toString()))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data) || 0])
      .range([height, 0]);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, index) => xScale(index.toString()) || 0)
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', 'blue');
  }, [data]);

  return (
    <svg className="mt-15" ref={svgRef} width={400} height={400}></svg>
  );
};

export default DashboardChart;