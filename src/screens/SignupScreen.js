import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    React.useEffect(() => {
        return navigation.addListener('blur', clearErrorMessage);
    }, []);

    return (
        <View style={styles.container}>
            <AuthForm headerText="Sign Up for Tracker" errorMessage={state.errorMessage} submitButtonText="Sign Up"
                      onSubmit={signup}/>
            <NavLink text="Already have an account? Sign in instead" routeName="Signin" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 150,
    },
});

export default SignupScreen;