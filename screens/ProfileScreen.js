import React, { useState, useEffect, useContext } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { FontAwesome } from "@expo/vector-icons";
import { color } from "../constants/Colors";
import Myappbar from "../components/componentsClient/Myappbar";
import clienttService from "../services/Clientt";
import { Context } from "../contexts/Auth.context";

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(Context);
  const [me, setMe] = useState({});

  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  const getMyInfo = async () => {
    if (user.role === "client") {
      const response = await clienttService.getMyProfile();
      if (response.ok) {
        setMe((state) => ({ ...state, ...response.data }));
        console.log("doneeeee:", me);
      } else {
        console.log("BAD//////", response);
      }
    } else if (user.role === "merchant") {
      const response = await clienttService.getProfile();
      if (response.ok) {
        setMe((state) => ({ ...state, ...response.data }));
      } else {
        console.log("BAD//////", response);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: color.Primary }}>
        <Myappbar
          title="My Profil"
          // subtitle="Vous avez 3 nouvelles notifications"
          navigation={navigation}
        />
      </View>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={require("../assets/assets/user.png")}
            size={80}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              marginLeft: 20,
            }}
          >
            <View>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                {me.firstName + " " + me.lastName}
              </Title>

              <Caption style={styles.caption}>A</Caption>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("EditAccount")}
            >
              <FontAwesome name="pencil" size={24} color={color.Secondary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          {me && (
            <Text style={{ color: "#777777", marginLeft: 20 }}>{me._id}</Text>
          )}
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          {me && (
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {me.phoneNumber}
            </Text>
          )}
        </View>
        {/* <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View> */}
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>₹140.50</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Commandes</Caption>
        </View>
      </View>

      {/* <View style={styles.menuWrapper}>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>‎Mes paiements</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>

      </View> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "0%",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.Primary,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
