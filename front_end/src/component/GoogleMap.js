import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
  render() {
    const mapStyles = {
      width: '50%',
      height: '400px',
      padding: '40px', 
      boxsizing: 'border-box',
      borderradius: '20px',
      boxshadow: '5px 5px 10px #8c9fe0ed',
      float:'left',
      left:'20px',

    };

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 18.67533, lng: 73.89247 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCoQ0CtWorMF7OIM26u00VJ1ILDoGJT6Hw', // Replace with your Google Maps API key
})(GoogleMap);
