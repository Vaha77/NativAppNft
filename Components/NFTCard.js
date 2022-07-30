import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, assets, SHADOWS } from "../constants";
import { CircleButton, RacetButton } from "./Button";
import { EthPrice, NFTTitle, SubInfo } from "./Subinfo";
const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <CircleButton imgUrl={assets.heart} right={10} top={10} />
      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RacetButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Deatails", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
