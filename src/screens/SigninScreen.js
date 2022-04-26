import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({navigation}) => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    React.useEffect(() => {
        return navigation.addListener('blur', clearErrorMessage);
    }, []);

    return (
        <View style={styles.container}>
            <AuthForm headerText="Sign In to Your Account" errorMessage={state.errorMessage} submitButtonText="Sign In"
                      onSubmit={signin}/>
            <NavLink text="Don't have an account? Sign up instead" routeName="Signup" />
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

export default SigninScreen;