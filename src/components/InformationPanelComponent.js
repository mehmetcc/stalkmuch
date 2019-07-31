/** All react related imports */
import React from 'react';
/** All material-ui related imports */
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (3, 2),
  },
  textField: {
    width: 160,
  },
}));

/** internal classes and/or functions defined */

export default function InformationPanelComponent () {
  const classes = useStyles ();

  const [values, setValues] = React.useState ({
    nearestCenter: '',
  });

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography component="p" align="left">
            Nearest Town Center
          </Typography>
          <TextField
            disabled
            id="nearest-center-disabled"
            label="Nearest Town Center"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" align="left">
            Current City
          </Typography>
          <TextField
            disabled
            id="nearest-center-disabled"
            label="Current City"
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
        <Typography component="p" align="left">
            Distance to the Earth Center
          </Typography>
          <TextField
            disabled
            id="nearest-center-disabled"
            label="Earth Center"
            className={classes.textField}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
