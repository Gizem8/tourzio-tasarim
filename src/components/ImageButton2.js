import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')


class ImageButton2 extends Component {
    
    render() {
        return (
            
            <View style={{ width: 110, height:190,alignItems: 'center', justifyContent: 'center',marginTop:5,borderRadius:10,marginRight: width* 0.02,marginLeft: width* 0.04}}>
                <TouchableOpacity onPress={() => Actions.push("ForgetPassword")} activeOpacity={0.6}>
                    <View style={{ width: 118, alignItems: 'center', justifyContent: 'center', borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
                        <Image style={this.props.resim} source={{ uri: this.props.imageUrl }} />
                        <Text style={{ width: 70, color: "#000", justifyContent:'flex-start',alignItems:'flex-start',marginTop:10,marginLeft:-27,fontWeight:'bold'}}> {this.props.imageName}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin : 2, paddingHorizontal: width * 0.05,marginBottom:15}}>
                        <Text style={{width: 45, color: "grey",alignItems:'flex-start', justifyContent:'flex-start',fontSize:12}}> {this.props.imageName1}</Text>
                        <Text style={{width: 50, color: "green",alignItems:'flex-start', justifyContent:'flex-start',fontSize:12}}> {this.props.imageName2}</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
            </View>
            
           
            
        );
        
        
    }
};



export default ImageButton2;