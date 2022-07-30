import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import {
  CircleButton,
  DetailsBit,
  FocusedStatusBar,
  RacetButton,
  SubInfo,
} from "../Components";
import { SHADOWS, SIZES, assets } from "../constants";

// details headr

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      resizeMode="cover"
      source={data.image}
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currebntHeight + 10}
    />
  </View>
);

const Deatails = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RacetButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      {/* flat list */}
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBit bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo/>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Deatails;
