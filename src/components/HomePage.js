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

const { width, height } = Dimensions.get("window");

const logo = {

    width: 50,
    height: 50,
    marginLeft: 3,
    marginRight: 3
}

class HomePage extends Component {
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
                      
                            <View style={{ flexDirection: 'row', height: height * 0.10, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                    <TouchableOpacity onPress={() => Actions.push("menu")}>
                                        <Icon
                                            name='bars'
                                            type='ion-icon'
                                            color='#fafafa'
                                            style={{ backgroundColor: 'transparent', marginLeft: 10, marginTop: -5 }}
                                            size={32}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: 22, color: '#fafafa', marginTop: 25, marginRight:120}} >TOURZIO</Text>
                            </View>
                            <View style={{ height: height * 0.07 }}>
                                <SearchBar
                                    placeholder="Destinations..."
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
                            <View style={{ height: height * 0.25 }}>
                                <Text style={{ textAlign: 'left', fontSize: 11, color: '#d3d3d3', marginLeft: 10 }} >TRIP</Text>
                                <Text style={{ textAlign: 'left', fontSize: 13, color: '#fafafa', marginLeft: 10 }}>THEMES</Text>

                                <ScrollView
                                    style={styles.scroll}
                                    horizontal={true}>

                                    <ImageButton
                                        imageUrl={'https://i.pinimg.com/564x/96/4c/e8/964ce8e0935f02011c1706d79518dd06.jpg'}
                                        imageName={"Honey Moon"}
                                        resim={styles.resim1}
                                    />
                                    <ImageButton
                                        imageUrl={'https://i.pinimg.com/236x/76/ae/8c/76ae8cc35b12dca088b264d60237a394.jpg'}
                                        imageName={"Adventure"}
                                        resim={styles.resim1}
                                    />
                                    <ImageButton
                                        imageUrl={'https://i.pinimg.com/564x/ec/38/dc/ec38dc98a555dd13fbfec3a9c8501d5c.jpg'}
                                        imageName={"Nature"}
                                        resim={styles.resim1}
                                    />
                                    <ImageButton
                                        imageUrl={'https://i.pinimg.com/236x/ae/83/fc/ae83fc7891a836d5f184f2c5eb4e8379.jpg'}
                                        imageName={"Family"}
                                        resim={styles.resim1}
                                    />
                                    <ImageButton
                                        imageUrl={'https://i.pinimg.com/236x/98/42/d9/9842d9a940ef70d5ab34b9aacede5571.jpg'}
                                        imageName={"Travel"}
                                        resim={styles.resim1}
                                    />
                                    <ImageButton
                                        imageUrl={'https://i.pinimg.com/236x/f4/f2/8f/f4f28f15493ba1870e3524910e0ca8f8.jpg'}
                                        imageName={"Hotel"}
                                        resim={styles.resim1}
                                    />
                                    <ImageButton
                                        imageUrl={'https://i.pinimg.com/564x/96/4c/e8/964ce8e0935f02011c1706d79518dd06.jpg'}
                                        imageName={"Europe"}
                                        resim={styles.resim1}
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ height: height * 0.10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 11, color: '#d3d3d3', marginLeft: 7 }} >TRENDING</Text>
                                <TouchableOpacity onPress={() => Actions.push("destinations")} activeOpacity={0.6}>
                                    <Text style={{ textAlign: 'left', fontSize: 13, color: '#fafafa', marginLeft: 7 }}>DESTINATIONS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ height: height * 0.20 }}>

                        <ScrollView
                            style={styles.scroll2}
                            horizontal={true}>

                            <ImageButton2
                                imageUrl={'https://s3.ivisa.com/website-assets/blog/mayabay.png'}
                                imageName={"Thailand"}
                                imageName1={"starting"}
                                imageName2={"$4000/.."}
                                resim={styles.resim2}
                            />
                            <ImageButton2
                                imageUrl={'https://www.remax.eu/uploads/agent-1/Greece%20(Optimized)-5e580fa45d9f1.jpg'}
                                imageName={"Greece"}
                                imageName1={"starting"}
                                imageName2={"$4000/.."}
                                resim={styles.resim2}
                            />

                            <ImageButton2
                                imageUrl={'https://recruit4languages.com/app/uploads/2019/09/shu-Romania-Transylvania-Peles-494393290-1440x823.jpg'}
                                imageName={"Romania"}
                                imageName1={"starting"}
                                imageName2={"$4000/.."}
                                resim={styles.resim2}
                            />
                            <ImageButton2
                                imageUrl={'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/turkey/istanbul/istanbul-guide-lead-xlarge.jpg'}
                                imageName={"Turkey"}
                                imageName1={"starting"}
                                imageName2={"$4000/.."}
                                resim={styles.resim2}
                            />

                            <ImageButton2
                                imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/800px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg'}
                                imageName={"Italy"}
                                imageName1={"starting"}
                                imageName2={"$4000/.."}
                                resim={styles.resim2}
                            />
                            <ImageButton2
                                imageUrl={'https://www.etextilemagazine.com/wp-content/uploads/2018/11/37.jpg'}
                                imageName={"England"}
                                imageName1={"starting"}
                                imageName2={"$4000/.."}
                                resim={styles.resim2}
                            />
                            <ImageButton2
                                imageUrl={'https://sfstatic.mncdn.com/8/00/03/42/34/miami-shutterstock-490898872-1543306080.jpg'}
                                imageName={"Miami"}
                                imageName1={"starting"}
                                imageName2={"$4000/.."}
                                resim={styles.resim2}
                            />

                        </ScrollView>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginLeft: 20, marginTop: 25 }}>

                        <Text style={{ color: '#5c5c3d', fontSize: 12 }}>
                            SPECIAL
                     </Text>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 14 }}>
                            OFFERS
                     </Text>
                    </View>

                    <ScrollView
                        style={styles.scroll3}
                        horizontal={true}>

                        <ImageButton3
                            imageUrl={'https://s3.ivisa.com/website-assets/blog/mayabay.png'}
                            resim={styles.resim3}
                        />
                        <ImageButton3
                            imageUrl={'https://mediap.flypgs.com/awh/1254/837//files/ulkeler/Turkiye/TR/pamukkale-turu.jpg'}
                            resim={styles.resim3}
                        />
                        <ImageButton3
                            imageUrl={'https://antalya.com.tr/wp-content/uploads/2020/05/Antalya-Ka%C5%9F-Kaputa%C5%9F-2-1.jpg'}
                            resim={styles.resim3}
                        />

                    </ScrollView>
                </ScrollView>

                <View style={{ borderColor: '#000', borderTopWidth: 2, height: height * 0.08, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: width * 0.08, margintop: 10 }}>

                    <View style={{ marginLeft: 13 }}>
                        <TouchableOpacity onPress={() => Actions.push("homePage")} activeOpacity={0.6}>
                            <Icon
                                name="home"
                                style={{ fontSize: 24, color: '#000', marginTop: 8, marginLeft: 1 }}
                            >
                            </Icon>
                            <Text style={{ fontSize: 10 }}>Home</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Actions.push("trip")} activeOpacity={0.6}>
                            <Icon
                                name="star"
                                style={{ fontSize: 24, color: '#000', marginTop: 8 }}
                            >
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
                        <TouchableOpacity onPress={() => Actions.push("italy")} activeOpacity={0.6}>
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
                                style={{ fontSize: 24, color: '#000', marginTop: 8, marginLeft: 3 }}>
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

export default HomePage;