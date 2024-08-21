import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Register({ onRegister }) {
  const handleRegister = () => {
    if (onRegister) {
      onRegister(); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image  
          source={require("../assets/img/glicDaySimbol.png")}
          style={styles.imageGlic}
        />
      </View>
  
      <Text style={styles.subTitleRegister}>
        Registre e acompanhe a sua {'\n'}
        {'     '} glicose diariamente.
      </Text>
      
      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={handleRegister}
      >
        <Image style={styles.iconGoogle}
          source={require("../assets/img/G.png")}
        />
        <Text style={styles.titleButtonRegister}>
          Entrar com o Google
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageGlic:{
    bottom: 100,
    width: 243,
    height:80
  },
  buttonRegister:{
    backgroundColor:"#1365A0",
    color: "#fff",
    width: 312,
    height: 50,
    borderRadius: 100,
    justifyContent:"center",
  },
  iconGoogle: {
    width: 20,
    height: 20,
    top: 12,
    left: 47
  },
  subTitleRegister:{
    fontSize: 20,
    bottom: 60,
  },
  titleButtonRegister: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    bottom: 10,
    left: 3,
    fontWeight: "500",
  },
});
