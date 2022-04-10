import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')


class ButtonItaly extends Component {

    render() {
        return (

            <View style={{ width: 320,height:230,marginLeft:20,  alignItems: 'center', justifyContent: 'center', borderRadius: 10,marginTop:20,backgroundColor:'white', shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
                <TouchableOpacity onPress={() => Actions.push("ForgetPassword")} activeOpacity={0.6}>
                    <View style={{  width: 320, alignItems: 'center', justifyContent: 'center', borderRadius: 10,marginTop:-65}}>
                        <Image style={this.props.resim} source={{ uri: this.props.imageUrl }} />
                        <View style={{ width: 320, height:180,  alignItems: 'flex-end', justifyContent: 'flex-start', zIndex: 20,  borderRadius: 10, flexDirection: 'row',marginTop:-150}}>
                            <Text style={{   fontSize: 15, color: '#fafafa', marginBottom:60}}> {this.props.imageName3}</Text>
                            <Text style ={{ fontSize: 15, color: '#fafafa',marginLeft: -190, marginBottom: 40}}> {this.props.imageName4}</Text>
                            <View style={{ width: width * 0.35, margin: 15, opacity: 0.85, backgroundColor: '#00ff00', justifyContent: 'flex-end', marginLeft:100, marginBottom:50 }}>
                                <Text style ={{fontSize: 15, color: '#fafafa', justifyContent: 'flex-start', fontWeight:'200'}}> {this.props.imageName5}</Text>
                            </View>
                        </View>
                        <View style={{width:320,height:80,alignItems: 'flex-start', flexDirection: 'column',marginBottom:-70,marginRight:-10, marginLeft: -10}}>
                        <Text style={{width: 100, color: "green",fontSize:12,marginTop:-20}}> {this.props.imageName6}</Text>
                        <View style={{width:250,flexDirection: 'row', justifyContent: 'space-between',marginTop:2}}>
                        <Text style={{width: 40, color: "#000",fontSize:14,fontWeight:'bold', marginTop:-15, marginLeft:5, marginTop:-17}}> {this.props.imageName10}</Text>
                        <Text style={{width: 200, color: "#d3d3d3",fontSize:12}}> {this.props.imageName11}</Text>
                        </View>
                        <Text style={{width: 110, color: "#000",fontSize:12,marginTop:10}}> {this.props.imageName12}</Text>
                        <View style={{alignItems: 'center', justifyContent: 'center', marginLeft:210, flexDirection: 'row', marginTop: -10, margin:20}}>
                            <Icon
                                        name='fighter-jet'
                                        type='ion-icon'
                                        color = '#a9a9a9'
                                        size = {15}
                                        
                                       
                            />
                             <Icon
                                        name='car'
                                        type='ion-icon'
                                        color = '#a9a9a9'
                                        size = {15}
                                        style={{marginLeft:5}}
                                       
                            />
                              <Icon
                                        name='bed'
                                        type='ion-icon'
                                        color = '#a9a9a9'
                                        size = {15}
                                        style={{marginLeft:5}}
                                       
                            />
                             <Icon
                                        name='cutlery'
                                        type='ion-icon'
                                        color = '#a9a9a9'
                                        size = {15}
                                        style={{marginLeft:5}}
                                       
                            />
                            <Text style ={{color: '#696969'}}> +4</Text>
                                
                        </View>
                        </View>
                        
                        
                    </View>
                </TouchableOpacity>
            </View>


        );

    }
};



export default ButtonItaly;