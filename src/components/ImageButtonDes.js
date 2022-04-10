import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')


class ImageButtonDes extends Component {

    render() {
        return (

            <View style={{ width: 190, height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: -20 }}>
                <TouchableOpacity onPress={() => Actions.push("ForgetPassword")} activeOpacity={0.6}>
                    <View style={{ width: 160, height: 140, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: -310 }}>
                        <Image style={this.props.resim} source={{ uri: this.props.imageUrl }} />
                        <View style={{ width: 150, height: 130, alignItems: 'center', justifyContent: 'center', zIndex: 20, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 10, flexDirection: 'column', marginTop: -130 }}>
                            
                            <Text style={{ textAlign: 'center', width: 80, fontSize: 15, color: '#fafafa', fontWeight: 'bold', marginBottom: 5 }}> {this.props.imageName3}</Text>
                            <Text style={{ textAlign: 'center', width: 100, fontSize: 13, color: '#fafafa', marginBottom: 2 }}> {this.props.imageName4}</Text>
                            <Text style={{ textAlign: 'center', width: 100, fontSize: 13, color: '#fafafa', }}> {this.props.imageName5}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        );

    }
};



export default ImageButtonDes;