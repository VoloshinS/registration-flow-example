import React, { Fragment, ReactNode, FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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
}

const Layout: FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <Container maxWidth="md">{children}</Container>
      </div>
    </Fragment>
  );
};

export default Layout;
