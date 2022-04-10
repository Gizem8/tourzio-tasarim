import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, Dimensions, TouchableOpacity, Button, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");


class LoginForm extends Component {
    render() {
        const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg" };
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ height: height * 0.22, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 26, color: '#fafafa' }} >TOURZIO</Text>
                        <Text style={{ textAlign: 'center', fontSize: 13, color: '#fafafa' }}>We Stay For You</Text>
                    </View>
                    <View style={{ height: height * 0.38, justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ width: width * 0.92, borderColor: "#fafafa", borderWidth: width * 0.003, alignItems: 'center', justifyContent: 'center', borderRadius: width * 0.02 }}>
                            <TextInput
                                placeholder={"E-Mail"}
                                placeholderTextColor={"#000"}
                                style={{ backgroundColor: 'transparent', width: width * 0.9 }} />
                        </View>
                        <View style={{ width: width * 0.92, borderColor: "#fafafa", borderWidth: width * 0.003, alignItems: 'center', justifyContent: 'center', borderRadius: width * 0.02 }}>
                            <TextInput
                                placeholder={"Password"}
                                placeholderTextColor={"#000"}
                                style={{ backgroundColor: 'transparent', width: width * 0.9 }} />
                        </View>
                        <TouchableOpacity
                        onPress={() => Actions.push("forgetpassword")}>
                            <Text style={{ width: width * 0.90, color: "#000", textAlign: 'right'}}> Şifremi Unuttum </Text>
                        </TouchableOpacity>
                        <View style={{ width: "90%", margin: 10, opacity: 0.85 }}>
                            <Button
                                title="LOG IN"
                                color="#000"
                                onPress={() => Actions.push("homePage")}
                            />
                        </View>
                    </View>
                    <View style={{ height: height * 0.40 }}>
                        <View>
                            <Text style={{ color: '#fff', marginTop: 10, textAlign: 'center', fontWeight: "bold" }}> OR </Text>

                            <View>
                                <Text style={{ color: '#fff', marginTop: 10, textAlign: 'center', fontWeight: "bold" }}> Login With </Text>
                            </View>

                            <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-evenly' }}>
                                <Icon.Button
                                    name="facebook"
                                    backgroundColor="#3b5998"
                                    onPress={this.loginWithFacebook}
                                >
                                    FACEBOOK
                            </Icon.Button>
                                <Icon.Button
                                    name="twitter"
                                    backgroundColor="#2596be"
                                    onPress={this.loginWithTwitter}
                                >
                                    TWİTTER
                            </Icon.Button>

                            <Icon.Button
                                    name="google"
                                    backgroundColor="#ff4d4d"
                                    onPress={this.loginWithGoogle}
                                >
                                    GOOGLE
                            </Icon.Button>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.05 }}>
                                <Text style={{ width: width * 0.50, color: '#fff', textAlign: 'right', fontWeight: "bold" }}> Next To Tourzio?  </Text>
                                <TouchableOpacity
                                    onPress={() => Actions.push("register")}>
                                    <Text style={{ width: width * 0.40, color: "#fff", textAlign: 'left', fontWeight: "bold" }}> SignUp </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default LoginForm;