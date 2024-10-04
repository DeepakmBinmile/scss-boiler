import { Suspense, lazy } from 'react';

const BarChartComponent = lazy(() => import('./bar.chart'));
const AreaChartComponent = lazy(() => import('./area.chart'));
const PieChartComponent = lazy(() => import('./pie.chart'));
const RadicalChartComponent = lazy(() => import('./radical.chart'));
const RadarChartComponent = lazy(() => import('./radar'));

export default function ChartsExample() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '1fr',
        width: '100vw',
        gap: '10px',
        padding: '60px',
        boxSizing: 'border-box',
      }}
    >
      <Suspense fallback={<div>Loading Bar Chart...</div>}>
        <BarChartComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Area Chart...</div>}>
        <AreaChartComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Pie Chart...</div>}>
        <PieChartComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Radical Chart...</div>}>
        <RadicalChartComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Radar Chart...</div>}>
        <RadarChartComponent />
      </Suspense>
    </div>
  );
}
