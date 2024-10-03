import * as React from 'react';
import './index.scss';

export const ChevronRightIcon = () => (
  <svg
    height="10px"
    width="10px"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & { separator?: React.ReactNode }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);

Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'> & { className?: string }
>(({ className, ...props }: React.ComponentPropsWithoutRef<'ol'>, ref: React.Ref<HTMLOListElement>) => (
  <ol ref={ref} className={`breadcrumb-list ${className}`} {...props} />
));

BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'> & { className?: string }>(
  ({ className, ...props }, ref) => <li ref={ref} className={`breadcrumb-item ${className}`} {...props} />,
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { className?: string }
>(({ className, ...props }, ref) => {
  return <a ref={ref} className={`breadcrumb-link ${className}`} {...props} />;
});

BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'> & { className?: string }
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={`breadcrumb-page ${className}`}
    {...props}
  />
));

BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'> & { className?: string }) => (
  <li role="presentation" aria-hidden="true" className={`breadcrumb-separator ${className}`} {...props}>
    {children ?? <ChevronRightIcon />}
  </li>
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'> & { className?: string }) => (
  <span role="presentation" aria-hidden="true" className={`breadcrumb-ellipsis ${className}`} {...props}>
    {'...'}
    <span className="sr-only">More</span>
  </span>
);

BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
