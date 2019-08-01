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
    currentPosition: undefined,
  };

  componentDidMount = () => {
    const options = {
      enableHighAccuracy: false,
      timeout: Infinity,
      maximumAge: Infinity,

    };
    const error = err => console.error (err);

    navigator.geolocation.getCurrentPosition (
      position => {
        this.setState ({
          currentPosition: [
            position.coords.latitude,
            position.coords.longitude,
          ],
        });
      },
      error,
      options
    );
  };


  getLocation = () => {
    if (!this.state.currentPosition) {
      console.log ('Could not get current position'); 
      setTimeout (this.getLocation, 1000);
      return;
    }
    this.setState (
      state => ({focus: [...state.currentPosition]}),
      this.getCityName
    );
  };

  getCityName = () => {
    const [lat, lng] = this.state.focus;
    const fetchPlaceName = fetch (
      `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&username=erenayture`
    );
    const fetchAltitude = fetch (
      `http://api.geonames.org/astergdem?lat=${lat}&lng=${lng}&username=erenayture`
    );

    Promise.all ([fetchPlaceName, fetchAltitude])
      .then (response => Promise.all (response.map (r => r.json ())))
      .then (([placeNameData, altitude]) => {
        if (!altitude) {
          throw new Error ('Some error happened :)');
        }
        console.log ({placeNameData, altitude}); 
        const city = placeNameData.geonames[0]['adminName1'];
        this.setState ({city, altitude});
      })
      .catch (error => {
        this.setState ({apiError: true});
      });
  };

  /** 4. - GlobeEntypoint ve SearchComponent Entegrasyonu */
  // cıks :(
  callBackFromSearchComponent = searchData => {
    // tmm bura bozuk dimi
    /// aaa duur dur bir dk nop still same yukarı bak bi
    this.setState ({focus: [...searchData]}, this.getCityName);
    console.log ('Callback debug: ' + this.state.city); // bi dk searchData ile mi yapıon? aynen oradan gelip oraya gidiyo .dd
  };
  /** 4. bitti */

  render () {
    var isMobile = window.innerWidth <= 500;

    if (isMobile) {
      return (
        <div className="GlobeEntrypoint">
          {/**6. information panel */}
          <div id="InformationPanelMobileHeader">
            <InformationPanelComponent
              city={this.state.city}
              altitude={this.state.altitude}
            />
            {/* bu üstteki zımbırtının update olması gerek otomatik amirite? yeee*/}
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
              onClick={this.getLocation}
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
            <InformationPanelComponent
              city={this.state.city}
              altitude={this.state.altitude}
            />
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
