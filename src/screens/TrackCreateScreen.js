import React, {useEffect, useState, useContext} from "react";
import {StyleSheet} from "react-native";
import {Text} from "@rneui/themed";
import {SafeAreaView} from "react-native";
import Map from "../components/Map";
import {requestForegroundPermissionsAsync, watchPositionAsync, Accuracy} from "expo-location";
import {Context as LocationContext} from "../context/LocationContext";
import "../_mockLocation";

const TrackCreateScreen = () => {
    const {addLocation} = useContext(LocationContext);
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            let {granted} = await requestForegroundPermissionsAsync();
            if (!granted) {
                throw new Error("Location permission not granted");
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, (location) => {
                addLocation(location);
            });
        }catch (e){
            setErr(e);
        }
    }

    useEffect(()=>{
        startWatching();
    }, []);

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;