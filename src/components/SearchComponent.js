/** All react related imports */
import React from 'react';
/** All material-ui related imports */
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/** internal classes and/or functions defined */
import RedditTextField from './RedditTextField';

/** Material-UI stylings */
const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (3, 2),
  },
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: 'white',
  },
}));

/** internal classes and/or functions defined */
export default function SearchComponent (props) {
  const classes = useStyles ();

  const [values, setValues] = React.useState ({
    longitude: 39.9334,
    latitude: 32.8597,
    focus: undefined,
  });

  const handleChange = name => event => {
    setValues ({...values, [name]: event.target.value});

    console.log ('Debug - Longitude: ' + values.longitude);
    console.log ('Debug - Latitude: ' + values.latitude);
  };

  const sendData = () => {
    props.parentCallback (values.focus);
  };

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <RedditTextField
          id="longitudeInputField"
          label="Longitude"
          className={classes.margin}
          defaultValue="39.9334"
          variant="filled"
          onChange={handleChange ('longitude')}
        />
        <br />
        <RedditTextField
          id="latitudeInputField"
          label="Latitude"
          defaultValue="32.8597"
          className={classes.margin}
          onChange={handleChange ('latitude')}
          variant="filled"
        />
        <br />
        <Button
          required
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            values.focus = [values.longitude, values.latitude];

            console.log (
              'Debug - Focus after button is clicked: ' + values.focus
            );

            sendData ();
          }}
        >
          Submit
        </Button>
      </Grid>
    </div>
  );
}
