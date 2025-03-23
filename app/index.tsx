import { HeroSection } from "@/src/components/HeroSection";
import { ReactQuery } from "@/src/components/ReactQuery";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router'

export default function Index() {
  return (
   <SafeAreaView>
    <View>
      <HeroSection />
      <ReactQuery />
    </View>
   </SafeAreaView>
    
  );
}
 
