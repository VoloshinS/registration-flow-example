import React, { FC, ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Link from './Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: theme.palette.background.default,
    },
  })
);

interface Props {
  title: ReactNode;
  isAuthorized: boolean;
  onLogout: () => void;
}

const AppTopBar: FC<Props> = ({ title, isAuthorized, onLogout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              {title}
            </Link>
          </Typography>
          {isAuthorized ? (

            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit">
                <Link to="/registration" className={classes.link}>
                  Register
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppTopBar;
