import React, {useContext} from "react";
import {Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button} from "@rneui/themed";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView>
            <Text style={{fontSize: 48}}>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default AccountScreen;