import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an Account</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput placeholder="Phone Number" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={() => navigation.push("Details")}>
          Create an Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={() => navigation.push("Details Page")}>
          Go to Details Page
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 40,
  },
  btn: {
    height: 40,
    marginTop: 10,
    backgroundColor: "darkblue",
    width: 250,
    borderRadius: 6,
  },
  btnTex: {
    color: "white",
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
  },
  input: {
    width: 300,
    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    height: 50,
  },
});
export default Register;
