import {
  ComponentProps,
  FC,
} from "react";

import classNames from "classnames";

const DownloadLink: FC<ComponentProps<"a">> = ({
  children,
  className,
  ...linkProps
}) => (
  <a
    className={classNames(
      className,
      "bg-blue-500 text-white px-8 py-4 rounded inline-flex items-center space-x-2"
    )}
    {...linkProps}
  >
    <img className="w-4 h-4 ml-[-5px]" src="/images/download.svg" />
    <span>{children}</span>
  </a>
);

export default DownloadLink;
