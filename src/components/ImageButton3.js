import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')


class ImageButton3 extends Component {
    
    render() {
        return (
            
            <View style={{ width: 200,height:160,alignItems: 'center', justifyContent: 'center',marginTop:30,borderRadius:10,marginRight: width* 0.02,marginLeft: width* 0.04}}>
                <TouchableOpacity onPress={() => Actions.push("ForgetPassword")} activeOpacity={0.6}>
                    <View style={{ width: 200,height:160, alignItems: 'center', justifyContent: 'center', borderRadius:10}}>
                        <Image style={this.props.resim} source={{ uri: this.props.imageUrl }} />
                    </View>
                </TouchableOpacity>
            </View>
            
          
        );
        
    }
};



export default ImageButton3;