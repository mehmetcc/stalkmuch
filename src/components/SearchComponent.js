/** All react related imports */
import React from 'react';
/** All material-ui related imports */
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
export default function EulaComponent () {
  const classes = useStyles ();

  const [values, setValues] = React.useState ({
    longitude: undefined,
    latitude: undefined,
  });

  const handleChange = name => event => {
    setValues ({...values, [name]: event.target.value});

    console.log ('Debug - Longitude: ' + values.longitude);
    console.log ('Debug - Latitude: ' + values.latitude);
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
        <TextField
          id="longitudeInputField"
          label="Longitude"
          className={classes.textField}
          value={values.name}
          onChange={handleChange ('longitude')}
          margin="normal"
          variant="outlined"
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          required
          id="latitudeInputField"
          label="Latitude"
          className={classes.textField}
          value={values.name}
          onChange={handleChange ('latitude')}
          margin="normal"
          variant="outlined"
          InputProps={{
            className: classes.input,
          }}
        />
        <Button
          required
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </div>
  );
}
