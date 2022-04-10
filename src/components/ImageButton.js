import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window')

class ImageButton extends Component {
    render() {
        return (
            <View style={{ width: 70, alignItems: 'center', justifyContent: 'center', marginRight:width*0.02 }}>
                <TouchableOpacity onPress={() => Actions.push("forgetPassword")} activeOpacity={0.6}>
                    <View style={{ width: 70, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={this.props.resim} source={{ uri: this.props.imageUrl }} />
                        <Text style={{ width: 70, color: "white", textAlign: "center" }}> {this.props.imageName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};



export default ImageButton;