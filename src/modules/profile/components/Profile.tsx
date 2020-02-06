import React, { FC, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import { getUser, deleteUser, updateUser } from '../../core/redux';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: theme.spacing(2),
    },
  })
);

const Profile: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [description, setDescription] = useState(user.description);

  const styles = useStyles();
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(
        updateUser({
          ...user,
          description,
        })
      );
    },
    [dispatch, user, description]
  );
  const handleChangeDesc = useCallback(e => {
    setDescription(e.target.value);
  }, []);

  const handleDelete = useCallback(() => {
    dispatch(deleteUser(user.username));
  }, [user, dispatch]);

  return (
    <div className={styles.container}>
      <CssBaseline />
      <Typography variant="h4">{user.username}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Description"
          id="description"
          fullWidth
          multiline
          onChange={handleChangeDesc}
          value={description}
        />
        <div className={styles.buttonContainer}>
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
