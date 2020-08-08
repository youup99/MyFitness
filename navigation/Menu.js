import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from "../components";
import argonTheme from "../constants/Theme";

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    "Home",
    "Workouts",
    "Progress",
    // "Profile",
    // "Account",
    // "Elements",
    // "Articles",
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.05} row style={styles.header}>
        {/* <Image styles={styles.logo} source={Images.Logo} /> */}
        <Icon
          name="user"
          family="font-awesome-5"
          size={30}
          color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          style={styles.icon}
        />
        <Text h5 bold style={styles.name}>
          Youup Kim
        </Text>
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
          {/* <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
              <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
              <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>DOCUMENTATION</Text>
            </Block>
            <DrawerCustomItem title="Getting Started" navigation={navigation} /> */}
        </ScrollView>
      </Block>
      <Block style={{ paddingBottom: 40}}>
        <DrawerCustomItem
          title="Log out"
          key={3}
          navigation={navigation}
          focused={state.index === 3 ? true : false}
          ></DrawerCustomItem>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "flex-start",
  },
  icon: {
    alignSelf: "center",
    paddingRight: 20
  },
  name: {
    alignSelf: "center"
  }
});

export default CustomDrawerContent;
