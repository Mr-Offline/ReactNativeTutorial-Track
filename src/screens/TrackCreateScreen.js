import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {Text} from "@rneui/themed";
import {SafeAreaView} from "react-native";
import Map from "../components/Map";
import {requestForegroundPermissionsAsync} from "expo-location";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            let {granted} = requestForegroundPermissionsAsync();
            if (!granted) {
                throw new Error("Location permission not granted");
            }
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