import { FC, PropsWithChildren } from 'react';

import styles from './ContentBox.module.css';
import classNames from 'classnames';

interface ContentBoxProps extends PropsWithChildren {
  className?: string;
}

export const ContentBox: FC<ContentBoxProps> = ({ className, ...props }) => (
  <div className={classNames(styles.contentBox, className)} {...props} />
);
