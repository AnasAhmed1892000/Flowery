import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { colors } from "../values/colors";
import Settings from "../components/Settings";

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.Image}
          source={require("../../assets/icons/photo5.jpeg")}
        />
        <View
          style={{ alignItems: "center", width: "100%", marginHorizontal: -15 }}
        >
          <Text style={styles.username}>Anas Eltanany</Text>
          <TouchableOpacity>
            <Text style={{ color: colors.pink, marginTop: 10 }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Settings title={"My People"} />
      <Settings title={"Payment Method"} />
      <Settings title={"My orders"} />
      <Settings title={"Coupons"} />
      <Settings title={"Settings"} />
      <Settings title={"Privacy"} />
      <Settings title={"Contact US"} />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: "center",
    marginVertical: 25,
  },
  username: {
    fontSize: 22,
    fontWeight: "600",
  },
});
