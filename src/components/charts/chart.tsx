import './charts.scss';

import { ComponentProps, createContext, forwardRef, useContext, useId, useMemo, CSSProperties } from 'react';
import { Legend, ResponsiveContainer, Tooltip } from 'recharts';

import {
  ChartConfig,
  ChartContextProps,
  ChartContainerProps,
  ChartTooltipContentProps,
  ChartLegendContentProps,
  ChartStyleProps,
  THEMES,
} from './types';

// ChartContext and custom hooks
export const ChartContext = createContext<ChartContextProps | null>(null);

function useChart() {
  const context = useContext(ChartContext);
  if (!context) throw new Error('useChart must be used within a <ChartContainer />');
  return context;
}

// ChartContainer component
const ChartContainer = forwardRef<HTMLDivElement, ComponentProps<'div'> & ChartContainerProps>(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div data-chart={chartId} ref={ref} className={`chart-container ${className}`} {...props}>
          <ChartStyle id={chartId} config={config} />
          <ResponsiveContainer>{children}</ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  },
);
ChartContainer.displayName = 'Chart';

// ChartStyle component
const ChartStyle = ({ id, config }: ChartStyleProps) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) return null;
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) =>
              `${prefix} [data-chart=${id}] {${colorConfig
                .map(([key, itemConfig]) => {
                  const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
                  return color ? `--color-${key}: ${color};` : null;
                })
                .join('\n')}}
              `,
          )
          .join('\n'),
      }}
    />
  );
};

// ChartTooltip and ChartTooltipContent components
const ChartTooltip = Tooltip;

const ChartTooltipContent = forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      active,
      payload,
      className,
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) return null;

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || 'value'}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === 'string'
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter)
        return <div className={`tooltip-label font-medium ${labelClassName}`}>{labelFormatter(value, payload)}</div>;

      if (!value) return null;

      return <div className={`tooltip-label font-medium ${labelClassName}`}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) return null;
    const nestLabel = payload.length === 1 && indicator !== 'dot';

    return (
      <div ref={ref} className={`chart-tooltip ${className}`}>
        {!nestLabel ? tooltipLabel : null}
        <div className="tooltip-content">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || 'value'}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div key={item.dataKey} className={`tooltip-item ${indicator === 'dot' ? 'centered' : ''}`}>
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={`indicator ${indicator}`}
                          style={
                            {
                              '--color-bg': indicatorColor,
                              '--color-border': indicatorColor,
                            } as CSSProperties
                          }
                        />
                      )
                    )}
                    <div className={`tooltip-text ${nestLabel ? 'nested' : ''}`}>
                      <div className="label-group">
                        {nestLabel ? tooltipLabel : null}
                        <span className="tooltip-label">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && <span className="tooltip-value">{item.value.toLocaleString()}</span>}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = 'ChartTooltip';

// ChartLegend and ChartLegendContent components
const ChartLegend = Legend;

const ChartLegendContent = forwardRef<HTMLDivElement, ChartLegendContentProps>(
  ({ className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={`payload-container ${verticalAlign === 'top' ? 'top-align' : 'bottom-align'} ${className}`}
      >
        {payload.map(item => {
          const key = `${nameKey || item.dataKey || 'value'}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div key={item.value} className="payload-item">
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="color-box"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  },
);
ChartLegendContent.displayName = 'ChartLegend';

function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined;
  }

  // Use type narrowing and cast to ensure payload has 'payload' property and it's an object.
  const payloadPayload =
    'payload' in payload &&
    (payload as { payload: unknown }).payload &&
    typeof (payload as { payload: unknown }).payload === 'object' &&
    (payload as { payload: unknown }).payload !== null
      ? (payload as { payload: Record<string, unknown> }).payload
      : undefined;

  let configLabelKey: string = key;

  // Check if key exists in the main payload object.
  if (key in payload && typeof (payload as Record<string, unknown>)[key] === 'string') {
    configLabelKey = (payload as Record<string, unknown>)[key] as string;
  }
  // Check if key exists in the nested payload object.
  else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === 'string') {
    configLabelKey = payloadPayload[key] as string;
  }

  return configLabelKey in config ? config[configLabelKey as keyof typeof config] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
