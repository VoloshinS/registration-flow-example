import React, { Fragment, ReactNode, FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import AppBar from './AppBar';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      flexGrow: 1,
      overflow: 'auto',
    },
  })
);

interface Props {
  children: ReactNode;
  title: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar title={title} />
      <CssBaseline />
      <div className={classes.container}>
        <Container maxWidth="md">{children}</Container>
      </div>
    </Fragment>
  );
};

export default Layout;
