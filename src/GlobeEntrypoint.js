/** All react related imports */
import React from 'react';
import ReactGlobe from 'react-globe';
/** All material-ui related imports */
import {withStyles, makeStyles} from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

/** internal classes and/or functions defined */
import './GlobeEntrypoint.css';
import SearchComponent from './components/SearchComponent';
import InformationPanelComponent from './components/InformationPanelComponent';

class GlobeEntrypoint extends React.Component {
  state = {
    focus: undefined,
    longitude: 0,
    latitude: 0,
    focus2: {
      longitude: '',
      latitude: '',
    },
    city: '',
    altitude: undefined,
    dummy: false,
  };

  getLocation () {
    navigator.geolocation.getCurrentPosition (position => {
      console.log (position);
      this.setState ({
        focus: [position.coords.latitude, position.coords.longitude],
      });
      this.getCityName ();
    });
  }

  getCityName () {
    fetch (
      'http://api.geonames.org/findNearbyPlaceNameJSON?lat=' +
        this.state.focus[0] +
        '&lng=' +
        this.state.focus[1] +
        '&username=erenayture'
    )
      .then (response => response.json ())
      .then (data => this.setState ({city: data.geonames[0]['adminName1'], dummy: !this.state.dummy}))
      .then (() => console.log (this.state.city));

      fetch (
        'http://api.geonames.org/astergdem?lat=' +
          this.state.focus[0] +
          '&lng=' +
          this.state.focus[1] +
          '&username=erenayture'
      )
        .then (response => response.json ())
        .then (data => this.setState ({altitude: data, dummy: !this.state.dummy}))
        .then (() => console.log (this.state.city));

        console.log(this.state.altitude);
  }

  /** 4. - GlobeEntypoint ve SearchComponent Entegrasyonu */
  callBackFromSearchComponent = searchData => {
    this.setState ({focus: searchData});
    this.getLocation ();
    console.log ('Callback debug: ' + this.state.city);
  };
  /** 4. bitti */

  render () {
    var isMobile = window.innerWidth <= 500;

    if (isMobile) {
      return (
        <div className="GlobeEntrypoint">
          {/**6. information panel */}
          <div id="InformationPanelMobileHeader">
            <InformationPanelComponent city={this.state.city} altitude={this.state.altitude}/>
          </div>
          {/** 6. bitti */}
          {/** 3. */}
          <div id="SearchMobileHeader">
            <SearchComponent
              parentCallback={this.callBackFromSearchComponent}
            />
          </div>
          {/** 3. bitti */}
          {/** 1. */}
          <div style={{width: '100vw', height: '100vh'}}>
            <ReactGlobe focus={this.state.focus} />
          </div>
          {/** 1. bitti */}

          {/** 2. */}
          <div
            style={{
              position: 'absolute',
              zIndex: 2000,
              top: 600,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            align="center"
          >

            <Fab
              color="primary"
              variant="extended"
              aria-label="Delete"
              className={styles.fab}
              onClick={this.getLocation.bind (this)}
            >
              <NavigationIcon className={styles.extendedIcon} />
              Find My Location!
            </Fab>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Fab
              color="secondary"
              variant="extended"
              aria-label="Delete"
              className={styles.fab}
              onClick={() => {
                this.setState ({focus: undefined});
                console.log (this.state.focus);
              }}
            >
              <NavigationIcon className={styles.extendedIcon} />
              Reset!
            </Fab>
          </div>
          {/* 2. bitti */}
        </div>
      );
    } else {
      return (
        <div className="GlobeEntrypoint">
          {/**6. information panel */}
          <div id="InformationPanelHeader">
            <InformationPanelComponent city={this.state.city} altitude={this.state.altitude} />
          </div>
          {/** 6. bitti */}
          {/** 3. */}
          <div id="SearchHeader">
            <SearchComponent
              parentCallback={this.callBackFromSearchComponent}
            />
          </div>
          {/** 3. bitti */}
          {/** 1. */}
          <div style={{width: '100vw', height: '100vh'}}>
            <ReactGlobe focus={this.state.focus} />
          </div>
          {/** 1. bitti */}

          {/** 2. */}
          <div
            style={{
              position: 'absolute',
              zIndex: 2000,
              top: 600,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            align="center"
          >

            <Fab
              color="primary"
              variant="extended"
              aria-label="Delete"
              className={styles.fab}
              onClick={this.getLocation.bind (this)}
            >
              <NavigationIcon className={styles.extendedIcon} />
              Find My Location!
            </Fab>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Fab
              color="secondary"
              variant="extended"
              aria-label="Delete"
              className={styles.fab}
              onClick={() => {
                this.setState ({focus: undefined});
                console.log (this.state.focus);
              }}
            >
              <NavigationIcon className={styles.extendedIcon} />
              Reset!
            </Fab>
          </div>
          {/* 2. bitti */}
        </div>
      );
    }
  }
}

/** Material-UI stylings */
const theme = {
  spacing: 8,
};

const styles = makeStyles (theme => ({
  fab: {
    margin: theme.spacing (1),
  },
  extendedIcon: {
    marginRight: theme.spacing (1),
  },
}));

export default withStyles (styles) (GlobeEntrypoint);
