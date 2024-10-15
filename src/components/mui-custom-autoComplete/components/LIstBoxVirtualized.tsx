import { Children, cloneElement, forwardRef, ReactNode } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface ListboxVirtualizedProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode; // Make children optional
}

export const ListboxVirtualized = forwardRef<HTMLDivElement, ListboxVirtualizedProps>(
  function ListboxVirtualized(props, ref) {
    const { children, ...other } = props;

    const LISTBOX_PADDING = 8; // Define padding (if needed)
    const items = Children.toArray(children); // Convert children to an array
    const itemCount = items.length; // Get the number of items
    const itemSize = 46; // Define the height for each item

    const getHeight = () => itemCount * itemSize;

    const renderRow = ({ index, style }: ListChildComponentProps) =>
      cloneElement(items[index] as React.ReactElement, {
        style: {
          ...style,
          top: (style.top as number) + LISTBOX_PADDING,
        },
      });

    return (
      <div ref={ref} {...other}>
        <FixedSizeList
          height={getHeight() < 250 ? getHeight() : 250} // Limit height to 250px
          itemCount={itemCount}
          itemSize={itemSize}
          width="100%"
        >
          {renderRow}
        </FixedSizeList>
      </div>
    );
  },
);
