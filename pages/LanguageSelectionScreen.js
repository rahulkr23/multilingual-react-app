import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import StringsOfLanguages from './StringsOfLanguages';

const LanguageSelectionScreen = ({navigation}) => {
  const lang = [
    {shortform: 'hi', longform: 'Hindi'},
    {shortform: 'en', longform: 'English'},
  
  ];

  const settext = (value) => {
    StringsOfLanguages.setLanguage(value);
    navigation.navigate('ContentScreen', {selectedLanguage: value});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          Select Your Mother Language
        </Text>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/language.png',
          }}
          style={styles.imageStyle}
        />
        <ScrollView style={{marginTop: 90, width: '80%', }}>
          {lang.map((item, key) => (
            <View style={styles.elementContainer} key={key}>
              <Text
                onPress={() => settext(item.shortform)}
                style={styles.textStyle}>
                {item.longform}
              </Text>
              <View style={styles.saparatorStyle} />
            </View>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
           
          }}>
       ShramIn
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.shramin.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:"#F38F8F"
  },
  headingStyle: {
    color: '#191919',
    fontSize: 25,
    textAlign: 'center',
    
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginTop: 30,
  },
  elementContainer: {
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
    // backgroundColor:'#EEE9E9'
  },
  textStyle: {
    color: '#191919',
    fontSize: 25,
  },
  saparatorStyle: {
    height: 0.5,
    width: '60%',
    backgroundColor: '#C2C2C2',
    marginTop: 10,
  },
});

export default LanguageSelectionScreen;