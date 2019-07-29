/** All react related imports */
import React from 'react';
import ReactGlobe from 'react-globe';
/** All material-ui related imports */
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

/** internal classes and/or functions defined */
import './GlobeEntrypoint.css';

class GlobeEntrypoint extends React.Component {

  state = {
    focus: undefined,
    isBrowserSupportingGeolocation: undefined,
  }

  getLocationInformation() {
  }
  

  render() {
    return (
    <div className="GlobeEntrypoint">
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactGlobe focus={this.state.focus} />
      </div>
      <div style={{position: 'absolute',
                  zIndex: 2000,
                  top: 600,
                  left:0,
                  bottom: 0,
                  right: 0
                  }}
      align="center">


        <Fab color="primary" 
             variant="extended"
            aria-label="Delete"
            className={styles.fab}
            onClick={() => {
              // TODO geolocation logic
              this.setState({focus: [39.9334, 32.8597]});
              console.log(this.state.focus);
             }
            }>
          <NavigationIcon className={styles.extendedIcon} />
            Find My Location!
      </Fab>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fab color="secondary" 
           variant="extended"
           aria-label="Delete"
           className={styles.fab}
           onClick={() => {
             this.setState({focus: undefined});
             console.log(this.state.focus);
            }
           }>
          <NavigationIcon className={styles.extendedIcon} />
            Reset!
      </Fab>
      </div>
    </div>
    )
  }
}

/** Material-UI stylings */
const theme = {
  spacing: 8,
}


const styles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default withStyles(styles)(GlobeEntrypoint);

