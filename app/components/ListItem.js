import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.ListItemContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={style.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>

          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size="25"
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  title: {
    fontWeight: "500",
  },
  ListItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
  },

  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
