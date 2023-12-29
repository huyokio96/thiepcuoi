import React, { Component } from 'react'

import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

export class MapComponent extends Component {

    render() {

        return (<div className="">

            <Map

                google={this.props.google}

                zoom={20}

                center={{

                    lat: 13.971755568421585,

                    lng: 107.99826796147242

                }}

            >
                <Marker key="marker_1"

                    position={{

                        lat: 13.971755568421585,

                    lng: 107.99826796147242

                    }}

                />

            </Map>

        </div>);

    }

}

export default GoogleApiWrapper({

    apiKey: ('AIzaSyCpzy828kYBYYSpyZAIcqJ6xCkQHSxwotg')

})(MapComponent);