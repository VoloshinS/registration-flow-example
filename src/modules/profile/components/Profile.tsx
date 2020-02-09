import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import { User } from '../../core/interfaces';
import { getUser, deleteUser } from '../../core/redux/user.duck';
import useProfileForm from '../hooks/useProfileForm';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
    },
    field: {
      marginTop: theme.spacing(2),
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: theme.spacing(2),
    },
  })
);

const Profile: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const formik = useProfileForm<User>({
    initialValues: user,
  });

  const handleDelete = useCallback(() => {
    dispatch(deleteUser.request(user.username));
  }, [user, dispatch]);

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Typography variant="h4">{user.username}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.field}
          label="Description"
          id="description"
          fullWidth
          multiline
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <div className={classes.buttonContainer}>
          <Button type="button" variant="contained" color="secondary" onClick={handleDelete}>
            Delete Profile
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
