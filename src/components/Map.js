navigator.geolocation = require('@react-native-community/geolocation');

//import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import MapStyle from '../components/MapStyle';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function components() {
    const url = 'https://parseapi.back4app.com/functions/get_offer_points';
    const config = {
        headers: {
            'X-Parse-Application-Id': '47RAnYvxm7rWLUTUZYHt9SItJjd9FnmWj5ZK5g92',
            'X-Parse-REST-API-Key': 'ZMbHFNcQ1Rvh7bIpoctydiF9yRtZDrnJ81pzhtdF'
        }
    };

    const latitude = useSelector(state => state.user.location.latitude);
    const longitude = useSelector(state => state.user.location.longitude);
    const filters = useSelector(state => state.filterActive);
    const filterTabActive = useSelector(state => state.filterTabActive);

    async function read_offers(data) {
        if (data === 0) {
            return await axios.post(url, {}, config).then((res) => {
                console.log(res.data.result);
                return addMarkers(res.data.result);
            });
        } else {
            return await axios.post(url, data, config).then((res) => {
                console.log(res.data.result)
                return addMarkers(res.data.result);
            });
        }
    }   

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
               changeActive(latitude, longitude);
               console.log(latitude, longitude); 
            },
            () => {},
            {
                timeout: 20000,
                enableHighAccuracy: false,
                maximumAge: 10000,
            }
        );
        read_offers({position: {latitude: latitude, longitude: longitude}, filter: 0});
    },[]);

    function changeActive(latitude, longitude) {
        dispatch({ type: 'UPDATE_LOCATION', latitude: latitude, longitude: longitude })
    }

    function addMarkers(markers) {
        dispatch({ type: 'ADD_MARKERS', markers: markers })
    }

    function selectMarker(name, description) {
        dispatch({ type: 'SELECT_MARKER', name: name, description: description })
    }

    function deselectMarker() {
        dispatch({ type: 'DESELECT_MARKER' })
    }

    const dispatch =  useDispatch();
    const region = useSelector(state => state.user.location);
    const markers = useSelector(state => state.markers);
    const list = [];
    //const onShowAnim = this.props.onShowAnim;
    return (
        <MapView 
                    style={{ flex: 1 }} 
                    initialRegion={region} 
                    showsUserLocation
                    loadingEnabled
                    customMapStyle={MapStyle}
                    onPress={()=>deselectMarker()}
        >
            { markers.map(marker => (
                <Marker
                    key={marker.objectId}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude
                    }}
                    title={marker.name}
                    description={marker.description.portuguese}
                    onPress={()=>{selectMarker(marker.name, marker.description.portuguese)/*, onShowAnim*/}}
                    //onDeselect={()=>deselectMarker()}
                />
                ))}
        </MapView>
    );
}

