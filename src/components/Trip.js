import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import ImageButton from './ImageButton';
import ImageButton2 from './ImageButton2';
import ImageButton3 from './ImageButton3';
import { scrollTo } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

class Trip extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        const image = {
            uri: "https://www.familyeducation.com/sites/default/files/inline-images/Last-Names-Greece.jpg",

        };
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    styles={styles.scroll2}
                    vertical={true} >

                    <ImageBackground source={image} resizeMode="cover" style={{
                        flex: 0.60,
                        height: height * 0.40,
                        overflow: 'hidden',
                    }}>
                        <View style={{ flex: 1, backgroundColor: ' rgba(49,46,46,0.5) ' }}>
                        <View style={{ width: 70, alignItems: 'center', justifyContent: 'center', marginRight:width*0.02 }}>
               
                    <View style={{ width: 70, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={this.props.resim} source={{ uri: this.props.imageUrl }} />
                        <Text style={{ width: 70, color: "white", alignItems:'flex-end' , justifyContent: 'flex-end'}}> {this.props.imageName}</Text>
                    </View>
                
                <ImageButton
                                        imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MUzPPQTDzoBz_vij5KGlVDN_LRYAEpisyg&usqp=CAU'}
                                        imageName={"Catherina Zeta"}
                                        resim={styles.resim1}
                                    />
            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
                <View style={{ borderColor: '#000', borderTopWidth: 2, height: height * 0.08, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.08, margintop: 10 }}>

                    <View style={{ marginLeft: 13 }}>
                        <TouchableOpacity onPress={() => Actions.push("homePage")} activeOpacity={0.6}>
                            <Icon
                                name="home"
                                style={{ fontSize: 24, color: '#000', marginTop: 8, marginLeft: 1 }}>
                            </Icon>
                            <Text style={{ fontSize: 10 }}>Home</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Actions.push("trip")} activeOpacity={0.6}>
                            <Icon
                                name="star"
                                style={{ fontSize: 24, color: '#000', marginTop: 8 }}>
                            </Icon>
                            <Text style={{ fontSize: 10, marginLeft: 3 }}>Trip</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 65, height: 65, borderRadius: width / 2, backgroundColor: '#fff', marginTop: -30, marginLeft: -2, borderWidth: 2, borderColor: '#000' }}>
                        <View style={{ width: 55, height: 55, borderRadius: width / 2, backgroundColor: '#000', marginTop: 3, marginLeft: 3 }}>
                            <TouchableOpacity onPress={() => Actions.push('italy')}>
                                <Icon
                                    name="search"
                                    style={{ fontSize: 25, color: '#fff', marginLeft: 15, marginTop: 5 }}>
                                </Icon>
                                <Text style={{ fontSize: 10, marginLeft: -2, marginTop: 5, marginLeft: 12, color: '#fff' }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Actions.push("fav")} activeOpacity={0.6}>
                            <Icon
                                name="heart"
                                style={{ fontSize: 24, color: '#000', marginTop: 8, marginLeft: 5 }}>

                            </Icon>
                            <Text style={{ fontSize: 10, marginLeft: -1 }}>Favourite</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => Actions.push("profil")} activeOpacity={0.6}>
                            <Icon
                                name="user"
                                style={{ fontSize: 24, color: '#000', marginTop: 8, marginLeft: 3 }}
                            >
                            </Icon>
                            <Text style={{ fontSize: 10, marginLeft: -1 }}>Profile</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontFamily: "Cochin",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",

    },
    scroll: {
        width: width,
        maxHeight: height * 0.2
    },
    scroll2: {
        width: width,
        maxHeight: height * 0.50,
        borderRadius: 20,
        marginTop: -80,
    },
    resim1: {
        width: 60,
        height: 60,
        borderRadius: width / 2,
        marginTop:50,
        marginRight:-40


    },
    resim2: {
        width: 110,
        height: 120,
        borderRadius: 10,
        position: 'relative',

    },
    resim3: {
        width: 200,
        height: 160,
        borderRadius: 10,
        marginTop: -10
    },

});

export default Trip;