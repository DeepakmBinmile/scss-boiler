import { ComponentProps, ComponentType, ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';

// Format: { THEME_NAME: CSS_SELECTOR }
export const THEMES = { light: '', dark: '.dark' } as const;

export type ChartConfig = {
  [k in string]: {
    label?: ReactNode;
    icon?: ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

export type ChartContextProps = {
  config: ChartConfig;
};

export type ChartContainerProps = {
  config: ChartConfig;
  children: React.ReactNode;
};

export type ChartTooltipContentProps = ComponentProps<typeof RechartsPrimitive.Tooltip> &
  ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
  };

export type ChartLegendContentProps = ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean;
    nameKey?: string;
  };

export type ChartStyleProps = {
  id: string;
  config: ChartConfig;
};
