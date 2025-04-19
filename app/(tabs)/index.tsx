import SearchBar from "@/components/SearchBar";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">
      {/* <Image source={require("../../assets/images/bg.jpg")} className="w-full h-full absolute z-0" /> */}
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
        <Image source={require("../../assets/images/logo.png")} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
}
