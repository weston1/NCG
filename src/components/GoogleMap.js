import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'

let mapkey = ''
if (process.env.NETLIFY_MAP_KEY) {
  mapkey = process.env.NETLIFY_MAP_KEY
}

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.7392,
      lng: 104.9903
    },
    zoom: 14
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={39.7392} lng={104.9903} text={'Denver Colorado'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: '#e9556e' }}>
      <MapPin />
    </div>
  )
}
