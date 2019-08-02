/**
 * DAVID DAVENPORT'UN ASKERLERİYİZ
 * 
 * @author: Mehmet Can Altuntaş
 *          github.com/mehmetcc
 */

/** All react related imports */
import React from 'react';
/** All material-ui related imports */
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/** internal classes and/or functions defined */
import './Eula.css';
import EulaComponent from './components/EulaComponent';
import { Snackbar } from '@material-ui/core';

class Eula extends React.Component {
  state = {
    checkBoxClicked: false,
  };

  handleChange = event => {
    this.setState({checkBoxClicked: event.target.checked});
    this.setState({openedAtFirst: false});
  };

  nextPath (path) {
    this.props.history.push (path);
  }

  // TODO integrate snackbar
  handleButtonClickAction = event => {
    if (this.state.checkBoxClicked) {
        this.nextPath ('/globe');
    }
  };

  render () {
    return (
      <div className="EulaComponentClass">
        <Snackbar
        open={!!this.state.checkBoxClicked&&false}
        message="You didn't agree to the terms and conditions"
        />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <EulaComponent />
        <br />
        <div className="AcceptCheckboxClass">
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkBoxClicked}
                value="checkBoxClicked"
                onChange={this.handleChange}
                inputProps={{
                  'aria-label': 'primary checkbox',
                }}
              />
            }
            label="I agree to the Terms and Conditions"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleButtonClickAction}
          >
            Accept
          </Button>
        </div>
      </div>
    );
  }
}

/** Material-UI stylings */

export default Eula;