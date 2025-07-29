import { Image } from 'expo-image';
import {  StyleSheet ,ScrollView,View,Text} from 'react-native';




export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffff' }} >
      <View>
        <Text>
           weolcom to the gym app
        </Text>


      </View>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
