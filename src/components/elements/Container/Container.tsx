import { ReactNode } from 'react';
interface ContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Container = ({ id, className = '', children }: ContainerProps) => (
  <div
    id={id}
    className={`relative w-full min-h-screen overflow-hidden p-8 flex flex-col ${className}`}
  >
    {children}
  </div>
);

interface InnerProps {
  className?: string;
  children: ReactNode;
}

const Inner = ({ className = '', children }: InnerProps) => (
  <div
    className={`relative flex flex-1 flex-wrap items-center justify-center w-full max-w-5xl mx-auto ${className}`}
  >
    {children}
  </div>
);

type Width = '5/12' | '7/12' | '1/2' | 'full';
type Align = 'start' | 'center' | 'end';
type Order = 1 | 2;

interface ColumnProps {
  width?: Width;
  lgOrder?: Order;
  lgAlign?: Align;
  align?: Align;
  className?: string;
  children: ReactNode;
}

const widthMap: Record<Width, string> = {
  '5/12': 'lg:w-5/12',
  '7/12': 'lg:w-7/12',
  '1/2':  'lg:w-1/2',
  'full': '',
};
const alignMap: Record<Align, string> = {
  start:  'items-start',
  center: 'items-center',
  end:    'items-end',
};
const lgAlignMap: Record<Align, string> = {
  start:  'lg:items-start',
  center: 'lg:items-center',
  end:    'lg:items-end',
};
const orderMap: Record<Order, string> = {
  1: 'order-2 lg:order-1',
  2: 'order-1 lg:order-2',
};

const Column = ({
  width = 'full',
  lgOrder,
  lgAlign = 'center',
  align = 'center',
  className = '',
  children,
}: ColumnProps) => (
  <div
    className={[
      'w-full flex flex-col justify-center',
      widthMap[width],
      alignMap[align],
      lgAlignMap[lgAlign],
      lgOrder ? orderMap[lgOrder] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);

type PanelSize = 'lg' | 'wide';

interface PanelProps {
  size?: PanelSize;
  portrait?: boolean;
  className?: string;
  children: ReactNode;
}

const panelSizeMap: Record<PanelSize, string> = {
  lg:   'w-full max-w-lg',
  wide: 'w-full md:w-[80%]',
};

const Panel = ({
  size = 'lg',
  portrait = false,
  className = '',
  children,
}: PanelProps) => (
  <div
    className={[
      panelSizeMap[size],
      portrait ? 'portrait:mt-8' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);

Container.Inner = Inner;
Container.Column = Column;
Container.Panel = Panel;

Inner.displayName = 'Container.Inner';
Column.displayName = 'Container.Column';
Panel.displayName = 'Container.Panel';

export default Container;