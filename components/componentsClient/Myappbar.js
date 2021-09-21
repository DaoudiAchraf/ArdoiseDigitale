import * as React from "react";
import { Appbar } from "react-native-paper";
import { color } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../../contexts/Auth.context";

const Myappbar = (props) => {
  const { logout } = React.useContext(AuthContext);

  return (
    <Appbar.Header style={{ backgroundColor: "transparent", marginTop: "8%" }}>
      <Appbar.BackAction
        color={props.whiteMode ? color.Primary : "#FFFFFF"}
        onPress={() => {
          if (props.noGoBack)
            props.navigation && props.navigation.navigate("MapScreen");
          else if (props.popup == false) props.setPopup(true);
          else props.navigation && props.navigation.goBack();
        }}
        color="#FFFFFF"
      />
      <Appbar.Content
        title={props.title}
        subtitle={props.subtitle}
        color={props.whiteMode ? color.Primary : "#FFFFFF"}
        style={{ alignItems: "stretch" }}
      ></Appbar.Content>

      <TouchableOpacity onPress={logout}>
        <AntDesign
          name="logout"
          size={20}
          color={props.whiteMode ? color.Primary : "#FFFFFF"}
          style={{ marginRight: "3%" }}
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
};

export default Myappbar;
