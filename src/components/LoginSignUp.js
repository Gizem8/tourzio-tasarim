import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground, Button, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')

class LoginSignUp extends Component {
    render() {
        const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg" };
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ height: height * 0.16, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 26, color: '#fafafa' }} >TOURZIO</Text>
                        <Text style={{ textAlign: 'center', fontSize: 13, color: '#fafafa' }}>We Stay For You</Text>
                    </View>

                    <View style={{ height: height * 0.11, width: width, flexDirection: 'row', justifyContent: "space-around", paddingHorizontal: width * 0.01 }}>
                        <TextInput
                            placeholder={"FIRST NAME"}    
                            placeholderTextColor={"#000"}                       
                            value={this.props.firstName}
                            style={styles.border}
                            onChangeText={email => this.props.emailChanged(email)}
                            
                        />
                        <TextInput
                            placeholder={"LAST NAME" } 
                            placeholderTextColor={"#000"}                         
                            value={this.props.firstName}
                            style={styles.border}
                            onChangeText={email => this.props.emailChanged(email)}
                        /> 
                    </View >

                    <View style = {{height: height * 0.65,  flexDirection: 'column', borderColor: "#fafafa", alignItems: 'center', justifyContent: 'space-around'}}>
                            <TextInput
                                placeholder={"E-MAIL ADDRESS"}  
                                placeholderTextColor={"#000"}                     
                                value={this.props.firstName}
                                style={styles.genisBorder}
                                onChangeText={email => this.props.emailChanged(email)}
                            /> 
                            <TextInput
                                placeholder={"MOBİLE NUMBER"}
                                placeholderTextColor={"#000"}
                                style={styles.genisBorder}
                            />
                             <TextInput
                                placeholder={"PASSWORD"}
                                placeholderTextColor={"#000"}
                                style={styles.genisBorder}
                            />
                            <TextInput
                                placeholder={"CONFIRM"}
                                placeholderTextColor={"#000"}
                                style={styles.genisBorder}
                            />
                            <View style={{ width: "95%", margin: 10, opacity: 0.85 }}>
                            <Button
                                title="REGİSTER"
                                color="#000"
                                onPress={() => Alert.alert('Kayıt Olundu :)')}
                                style ={{borderRadius: 5, borderWidth:2 }} />
                            
                            </View>
                            <View>
                            <Text style={{ color: '#fff', marginTop: 10, alignItems: 'center', textAlign: 'center', fontWeight: "bold" }}> By clicking Register you accept our Terms of use and Privacy Policy. </Text>
                            <View style= {{ flexDirection: 'row', justifyContent: 'space-between',  paddingHorizontal: width * 0.07}}>
                                <Text style={{ width: width*0.60, color: '#fafafa', textAlign: 'right' }} >Already have an Account? </Text>
                                <TouchableOpacity 
                               onPress={() => Actions.push("loginScreen")}> 
                                    <Text style={{ width: width*0.30, color: "#fafafa", textAlign: 'left' , fontWeight: 'bold'}} > Login </Text>
                                    
                                </TouchableOpacity>
                        </View>
                            
                            </View>
                            
                    </View>
                </ImageBackground>
            </View>
                );
    }
}
    const styles = StyleSheet.create({
        text: {
            fontFamily: "Cochin",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "black"
    },
        border: {
            width: width * 0.45,
            height: 50,
            padding: 15,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: '#fafafa'
      },
      genisBorder: {
        width: width * 0.95,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#fafafa'
      }
});

    export default LoginSignUp;