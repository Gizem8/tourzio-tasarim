import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import ImageButton from './ImageButton';
import ImageButton2 from './ImageButton2';
import ImageButton3 from './ImageButton3';
import { scrollTo } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonItaly from './ButtonItaly';

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
                        height: height * 0.60,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        overflow: 'hidden',
                    }}>
                        <View style={{ flex: 1, backgroundColor: ' rgba(49,46,46,0.5) ' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.09 }}>
                                <View style={{ marginLeft: 10, marginTop: 25 }}>
                                    <TouchableOpacity onPress={() => Actions.push("homePage")}>
                                        <Icon
                                            name='arrow-left'
                                            type='ion-icon'
                                            color='#fafafa'
                                            style={{ backgroundColor: 'transparent', marginLeft: 10, marginTop: -5 }}
                                            size={30}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 150, flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 15, fontSize: 18, color: '#fafafa', fontWeight: "bold", marginLeft: 83 }}>ITALY -</Text>
                                    <Text style={{ marginTop: 15, fontSize: 14, color: '#d3d3d3' }}> 122 TOUR PACKAGES</Text>
                                    <Icon
                                        name='heart'
                                        type='ion-icon'
                                        color='#fafafa'
                                        style={{ backgroundColor: 'transparent', marginLeft: 35, marginTop: 17 }}
                                        size={20}
                                    />
                                </View>
                            </View>

                            <View style={{ height: height * 0.07 }}>
                                <SearchBar
                                    placeholder="Themes & Categories"
                                    onChangeText={search}
                                    value={search}
                                    containerStyle={{
                                        backgroundColor: 'white',
                                        borderBottomColor: 'transparent',
                                        borderTopColor: 'transparent',
                                        borderRadius: 30,
                                        justifyContent: "space-around",
                                        width: width * 0.92,
                                        height: height * 0.06,
                                        marginLeft: 20,
                                        padding: 8,
                                    }}
                                    inputContainerStyle={{

                                        backgroundColor: 'transparent',
                                        borderRadius: 30,
                                        width: width * 0.93,
                                        borderStyle: 'solid',
                                        height: height * 0.05,
                                    }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <ButtonItaly
                                    imageUrl={'https://www.destinavo.com/wp-content/uploads/2020/01/Italian-Food.jpg'}
                                    imageName3={"Italy Food Adventure Budget"}
                                    imageName4={"Tour Package"}
                                    imageName5={"4 Days & 3 Nights"}
                                    imageName6={"starting From"}
                                    imageName10={"$1449"}
                                    imageName11={"per Person on twin sharing"}
                                    imageName12={"Amsterdam  Greece"}

                                    resim={styles.resim5}
                                />
                            </View>

                        </View>
                    </ImageBackground>
                    <View style={{ flexDirection: 'row' }}>
                        <ButtonItaly
                            imageUrl={'https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg'}
                            imageName3={"Italy Food Adventure Budget"}
                            imageName4={"Tour Package"}
                            imageName5={"4 Days & 3 Nights"}
                            imageName6={"starting From"}
                            imageName10={"$1449"}
                            imageName11={"per Person on twin sharing"}
                            imageName12={"Amsterdam  Greece"}

                            resim={styles.resim5}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ButtonItaly
                            imageUrl={'https://static.officeholidays.com/images/935x475c/italy-02.jpg'}
                            imageName3={"Italy Food Adventure Budget"}
                            imageName4={"Tour Package"}
                            imageName5={"4 Days & 3 Nights"}
                            imageName6={"starting From"}
                            imageName10={"$1449"}
                            imageName11={"per Person on twin sharing"}
                            imageName12={"Amsterdam  Greece"}

                            resim={styles.resim5}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ButtonItaly
                            imageUrl={'https://www.planetware.com/wpimages/2020/06/italy-florence-to-pisa-best-ways-to-get-there-by-bus.jpg'}
                            imageName3={"Italy Food Adventure Budget"}
                            imageName4={"Tour Package"}
                            imageName5={"4 Days & 3 Nights"}
                            imageName6={"starting From"}
                            imageName10={"$1449"}
                            imageName11={"per Person on twin sharing"}
                            imageName12={"Amsterdam  Greece"}

                            resim={styles.resim5}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ButtonItaly
                            imageUrl={'https://www.wantedinrome.com/i/preview/storage/uploads/2021/03/italy-easter-lockdown-covid-19-red-zone.jpg'}
                            imageName3={"Italy Food Adventure Budget"}
                            imageName4={"Tour Package"}
                            imageName5={"4 Days & 3 Nights"}
                            imageName6={"starting From"}
                            imageName10={"$1449"}
                            imageName11={"per Person on twin sharing"}
                            imageName12={"Amsterdam  Greece"}

                            resim={styles.resim5}
                        />
                    </View>

                </ScrollView>
                <View style={{ borderColor: '#d3d3d3', borderTopWidth: 2, height: height * 0.08, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.20, margintop: 10 }}>

                    <View style={{ marginLeft: 13 }}>
                        <TouchableOpacity onPress={() => Actions.push("sortby")} activeOpacity={0.6}>
                            <Icon
                                name="sort-amount-desc"
                                style={{ fontSize: 24, color: '#000', marginTop: 8, marginLeft: 1 }}>
                                <Text style={{ fontSize: 12 }}>Sort By</Text>
                            </Icon>
                            
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Actions.push("trip")} activeOpacity={0.6}>
                            <Icon
                                name="sliders"
                                style={{ fontSize: 24, color: '#000', marginTop: 8 }}>
                                <Text style={{ fontSize: 12, marginLeft: 3}}>Filter</Text>
                            </Icon>
                            
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

    resim5: {
        width: 320,
        height: 155,
        borderRadius: 10,
        zIndex: 0,





    }

});

export default Trip;