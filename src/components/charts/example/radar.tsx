import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../chart';
import { ChartConfig } from '../types';

export const description = 'A radar chart with multiple data';

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig: ChartConfig = {
  desktop: {
    label: 'Desktop',
    color: ' var(--chart-1) ',
  },
  mobile: {
    label: 'Mobile',
    color: ' var(--chart-2) ',
  },
};

export default function RadarChartComponent() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
        <Radar dataKey="mobile" fill="var(--color-mobile)" />
      </RadarChart>
    </ChartContainer>
  );
}
