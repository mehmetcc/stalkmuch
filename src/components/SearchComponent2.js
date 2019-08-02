/**
 * DAVID DAVENPORT'UN ASKERLERİYİZ
 * 
 * @author: Mehmet Can Altuntaş
 *          github.com/mehmetcc
 */

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
export default class SearchComponent extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      longitude: 39.9334,
      latitude: 32.8597,
      focus: undefined,
    };
  }

  componentDidMount () {
    this.setState ({focus: [this.state.longitude, this.state.latitude]});
  }

  handleChange (e) {
    this.setState (
      (state) => ({[e.target.id]: e.target.value}),
      () => {
        console.log ('Debug - Longitude ' + this.state.latitude);
        console.log ('Debug - Latitude ' + this.state.latitude);
      }
    );
  }

  sendData = () => {
    this.props.parentCallback (this.state.focus);
  };

  render () {
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
            label="Longitude"
            defaultValue="39.9334"
            id="longitude"
            variant="filled"
            onChange={this.handleChange.bind (this)}
          />
          <br />
          <RedditTextField
            id="latitude"
            label="Latitude"
            defaultValue="32.8597"
            onChange={this.handleChange.bind (this)}
            variant="filled"
          />
          <br />
          <Button
            required
            variant="contained"
            color="primary"
            onClick={() => {
              let newArray = [this.state.longitude, this.state.latitude];
              this.setState ({
                focus: newArray,
              });

              console.log (
                'Debug - Focus after button is clicked: ' + this.state.focus
              );

              this.sendData ();
            }}
          >
            Submit
          </Button>
        </Grid>
      </div>
    );
  }
}
