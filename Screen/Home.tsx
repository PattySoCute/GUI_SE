import { StyleSheet, Text, View } from 'react-native';
import { Platform, PermissionsAndroid, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

/*const initialState = {
  latitude,
  longitud:null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}*/

async function requestPermissions() {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization("whenInUse");
    if(auth === "granted") {
       // do something if granted...
    }
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (async (granted:any) => granted === PermissionsAndroid.RESULTS.GRANTED) {
      // do something if granted...
    }
  }
}

interface Position {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const App = () => {
  const [pos, setPos] = useState<Position>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const mockUp = [
    {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    {
      latitude: 13.775675675655555,
      longitude: 100.43290053771605,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    {
      latitude: 13.8756756756788451,
      longitude: 100.43290053771605,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  ];
  const [toiletMarkers, setToiletMarkers] = useState<Position[]>(mockUp);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setPos({ ...pos, latitude: position.coords.latitude, longitude: position.coords.longitude });
        console.log('position', position);
      },
      (err) => {
        console.log('err', err);
      },
      {
        enableHighAccuracy: true
      }
    );
  }, []);
  useEffect(() => {
    setToiletMarkers(mockUp);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        onUserLocationChange={(e) => {
          console.log('locationChange', e.nativeEvent);
        }}
        showsUserLocation={true}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={pos}
        mapType='hybrid'
        followsUserLocation={true}
        showsMyLocationButton={true}
        zoomControlEnabled={true}
        showsBuildings={true}
        toolbarEnabled={true}
      >
        {/* {toiletMarkers &&
                    toiletMarkers.map((marker, index) => {
                        return <Marker key={String(index)} coordinate={marker} />;
                    })} */}
        <Marker title='test' description='KMUTT' coordinate={pos} />
        <Text>
          {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{pos.longitude}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{pos.latitude}</Text> */}
        </Text>
      </MapView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});