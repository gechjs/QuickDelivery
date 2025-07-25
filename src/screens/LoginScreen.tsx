import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { TextField } from "../components";
import { ButtonWithTitle } from "../components/ButtonWithTitle";
import { connect } from "react-redux";
import {
  ApplicationState,
  UserState,
  loginUser,
} from "../redux";

interface LoginProps {
  loginUser: (email: string, password: string) => Promise<any>;
  userReducer: UserState;
}

const _LoginScreen: React.FC<LoginProps> = ({
  loginUser,
  userReducer,
}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Login");
  const [isSignup, setIsSignup] = useState(false);

  const onTapAuthenticate = async () => {
    try {
      if (isSignup) {
        // placeholder sign-up flow
        await loginUser(email, password);
      } else {
        await loginUser(email, password);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onTapOptions = () => {
    setIsSignup(!isSignup);
    setTitle(!isSignup ? "Signup" : "Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={{ fontSize: 30, fontWeight: "400" }}>{title}</Text>
      </View>
      <View style={styles.body}>
        <TextField
          placeholder="Email ID"
          onTextChange={setEmail}
          isSecure={false}
        />

        {isSignup && (
          <TextField
            placeholder="Phone Number"
            onTextChange={setPhone}
            isSecure={false}
          />
        )}
        <TextField
          placeholder="Password"
          onTextChange={setPassword}
          isSecure={true}
        />

        <ButtonWithTitle
          title={title}
          height={50}
          width={350}
          onTap={onTapAuthenticate}
        />

        <ButtonWithTitle
          title={
            !isSignup
              ? "No Account? Signup Here"
              : "Have an Account? Login Here"
          }
          height={50}
          width={350}
          onTap={onTapOptions}
          isNoBg={true}
        />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  navigation: { flex: 3, justifyContent: "center", paddingLeft: 30 },
  body: { flex: 6, justifyContent: "center", alignItems: "center" },
  footer: { flex: 3 },
});

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
});

const LoginScreen = connect(mapStateToProps, { loginUser })(_LoginScreen);

export { LoginScreen };
