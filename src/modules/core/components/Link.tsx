import React, { FC, ReactNode } from 'react';
import MUILink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  to: string;
  children: ReactNode;
  className?: string;
}

const Link: FC<Props> = ({ to, children, className }) => {
  return (
    <MUILink component={RouterLink} to={to} className={className}>
      {children}
    </MUILink>
  );
};

export default Link;
