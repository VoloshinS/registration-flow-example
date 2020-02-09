import React, { FC, ReactNode } from 'react';
import { useFormik } from 'formik';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { User } from '../interfaces';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMessage: {
    color: theme.palette.error.main,
  }
}));

interface Props {
  title: string;
  buttonLabel: string;
  error?: string;
  icon?: ReactNode;
  validationSchema: any;
  onSubmit: (user: User) => void;
}

const Form: FC<Props> = ({ title, buttonLabel, onSubmit, validationSchema, error, icon }) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{icon ? icon : <LockOutlinedIcon />}</Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            label="Username"
            error={!!formik.errors.username}
            helperText={formik.errors.username}
            autoComplete="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            name="password"
            label="Password"
            error={!!formik.errors.password}
            helperText={formik.errors.password}
            onChange={formik.handleChange}
            value={formik.values.password}
            autoComplete="current-password"
          />
          {error && <div className={classes.errorMessage}>{error}</div>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {buttonLabel}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
