import { HeroSection } from "@/src/components/HeroSection";
import { ReactQuery } from "@/src/components/ReactQuery";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ReactConfrences } from "@/src/components/ReactConfrences";
import { LikesCarousel } from "@/src/components/LikesCarousel";
import { Comments } from "@/src/components/Comments";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <HeroSection />
        <ReactQuery />
        <ReactConfrences />
        <LikesCarousel />
        <Comments />
      </View>
    </SafeAreaView>
  );
}
