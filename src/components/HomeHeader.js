import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeHeader(props) {
  return (
    <View style={styles.container}>
      <Feather name="camera" size={25} color={'#000'} />
      <Image
        source={require('../../assets/logo.png')}
        resizeMode="contain"
        style={{width: 135, height: 50}}
      />
      <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
export default HomeHeader;
