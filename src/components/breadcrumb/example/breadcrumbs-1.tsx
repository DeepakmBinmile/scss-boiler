import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../index';

interface BreadcrumbItemData {
  label: string;
  href?: string;
}

interface BreadcrumbConfig {
  showLastAsLink?: boolean;
  linkClassName?: string;
  separatorClassName?: string;
  pageClassName?: string;
}

interface BreadcrumbDemoProps {
  breadcrumbItems?: BreadcrumbItemData[];
  config?: BreadcrumbConfig;
}

/**
 * Renders a breadcrumb navigation component with the provided breadcrumb items and configuration.
 *
 * @param breadcrumbItems - An array of breadcrumb item data, including label and optional href.
 * @param config - An optional configuration object with options to customize the breadcrumb display.
 * @param config.showLastAsLink - Whether to show the last breadcrumb item as a link.
 * @param config.linkClassName - CSS class name to apply to the breadcrumb links.
 * @param config.separatorClassName - CSS class name to apply to the breadcrumb separators.
 * @param config.pageClassName - CSS class name to apply to the last breadcrumb item when not shown as a link.
 * @returns A JSX.Element representing the breadcrumb navigation.
 */
export function BreadcrumbDemo({ breadcrumbItems = [], config = {} }: BreadcrumbDemoProps): JSX.Element {
  const { showLastAsLink = false, linkClassName = '', separatorClassName = '', pageClassName = '' } = config;

  try {
    if (!breadcrumbItems.length) {
      throw new Error('Breadcrumb items are missing or empty');
    }
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <BreadcrumbItem key={index}>
                {!isLast || showLastAsLink ? (
                  <BreadcrumbLink href={item?.href ?? '#'} className={linkClassName}>
                    {item?.label ?? 'Missing label'}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className={pageClassName}>{item?.label ?? 'Missing label'}</BreadcrumbPage>
                )}

                {!isLast && <BreadcrumbSeparator className={separatorClassName}></BreadcrumbSeparator>}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  } catch (error) {
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    }
    return <div>An unknown error occurred</div>;
  }
}
