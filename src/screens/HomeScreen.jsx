import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.landingScreenBackground}
    >
      <View style={styles.landingScreenOverlay}>
        <Text style={styles.landingScreenTitle}>
          Huddle
        </Text>
        <Text style={styles.landingScreenScript}>
          LOGIN TO{"\n"}
          CLIMB
          {/* <Image
            source={require("../../../assets/arrowUp.png")}
          /> */}
          {"\n"}
          THE RANKS{"\n"}
        </Text>
        <View style={styles.landingScreenButtonContainer}>
          <TouchableOpacity style={styles.signInAppleButton} onPress={() => navigation.navigate("Create account")}>
            <Text style={styles.signInAppleButtonText}>Continue with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInFacebookButton} onPress={() => navigation.navigate("Create account")}>
            <Text style={styles.signInFacebookButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>

          {/* <Text style={styles.troubleText}>
          Trouble signing in?{"\n"}
          </Text> */}

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  landingScreenBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  landingScreenOverlay: {
    flex: 1,
    backgroundColor: "#ED9237",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  landingScreenTitle: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 200,
    fontFamily: "Roboto",
    alignItems: 'center'
  },
    landingScreenScript: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 160,
    marginTop: 80,
    fontFamily: "Roboto",
    alignItems: 'center'
  },
  landingScreenButtonContainer: {
    position: "absolute",
    bottom: 90,
    width: "100%",
    alignItems: "center",
  },
  signInAppleButton: {
    backgroundColor: "#000000",
    marginBottom: '15',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: "345",
    height: "54"
  },
  signInAppleButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
  signInFacebookButton: {
    backgroundColor: "#1877F2",
    marginBottom: '30',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: "345",
    height: "54",
  },
  signInFacebookButtonText: {
    color: "#FFFFFF",
    fontSize:20,
    fontWeight: "bold",
    fontFamily: 'Helvetica',
    textAlign: 'center'
  },
  troubleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    fontFamily: "Montserrat",
    alignItems: 'center'
  },
});