import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, Dimensions,  Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");


class ForgetPassword extends Component {
    render() {
        const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg" };
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ height: height * 0.20, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Text style={{ textAlign: 'left', fontSize: 30, color: '#fafafa' }} >Forgot</Text>
                        <Text style={{ textAlign: 'left', fontSize: 30, color: '#fafafa' }}>Password</Text>
                    </View>
                    <View style={{ height: height * 0.09, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Text style={{ color: '#000', alignItems: 'flex-start', textAlign: 'left', fontWeight: "bold" }}> Select which contact details should we  </Text>
                        <Text style={{ color: '#000', alignItems: 'flex-start', textAlign: 'left', fontWeight: "bold" }}> use to reset your password </Text>
                    </View>

                    <View style={{ ...styles.mainView, flexDirection: 'row', alignItems: "center" }}>
                        <Icon
                            name='mobile'
                            type='ion-icon'
                            color='#fafafa'
                            size={30}
                        />
                        <TextInput
                            placeholder={"Via SMS \n \n +90 *** *** **13"}
                            placeholderTextColor={"#000"}
                            style={{ backgroundColor: 'transparent', width: width * 0.90 }} />
                    </View>

                    <View style={{ ...styles.mainView, flexDirection: 'row', alignItems: "center" }}>

                        <Icon
                            name='envelope'
                            type='ion-icon'
                            color='#fafafa'
                            size={22}
                        />
                        <TextInput
                            placeholder={"Via Email \n \n ************@gmail.com"}
                            placeholderTextColor={"#000"}
                            style={{ backgroundColor: 'transparent', width: width * 0.90 }} />
                        <View/>

                    </View>
                    
                    <View style={{ width: "90%", margin: 25, opacity: 0.85 }}>
                        <Button
                            style={{ height: height * 0.90, borderRadius: width * 0.9, fontWeight: 'bold' }}
                            title="SEND"
                            color="#000"
                            onPress={() => Alert.alert('Kayıt Olundu')}
                        />
                    </View>
                    
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    mainView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    //backgroundColor: '#fff',
    height: height * 0.09,
    justifyContent: 'flex-start',
    width: width * 0.9,
    paddingLeft:width*0.03,

    shadowOpacity: 0.1,
    shadowRadius: 5,
    //elevation: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 13,

    },
};

export default ForgetPassword;