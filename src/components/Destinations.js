import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageButtonDes from './ImageButtonDes';

const { width, height } = Dimensions.get("window");

class Destinations extends Component {
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
                                            name='angle-left'
                                            type='ion-icon'
                                            color='#fafafa'
                                            style={{ backgroundColor: 'transparent', marginLeft: 10, marginTop: -5 }}
                                            size={32}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 150 }}>
                                    <Text style={{ marginTop: 15, fontSize: 18, color: '#fafafa' }}>Destinations</Text>
                                </View>
                            </View>

                            <View style={{ height: height * 0.07 }}>
                                <SearchBar
                                    placeholder="Find your Destinations"
                                    onChangeText={search}
                                    value={search}
                                    containerStyle={{
                                        backgroundColor: 'white',
                                        borderBottomColor: 'transparent',
                                        borderTopColor: 'transparent',
                                        borderRadius: 30,
                                        justifyContent: "space-around",
                                        width: width * 0.92,
                                        height: height * 0.07,
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
                        </View>


                    </ImageBackground>
                    <View style={{ height: height * 0.63 }}>
                        <View style={{ flexDirection: 'row', margin: 20, justifyContent: "space-between" }}>

                            <ImageButtonDes
                                imageUrl={'https://p.favim.com/orig/2018/08/24/sunshine-beauty-grece-Favim.com-6199515.jpg'}
                                imageName3={"Greece"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />
                           
                               
                            <ImageButtonDes
                                imageUrl={'https://i.ytimg.com/vi/bMr57-IpfQY/maxresdefault.jpg'}
                                imageName3={"İtaly"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', margin: 20, justifyContent: "space-between" }}>

                            <ImageButtonDes
                                imageUrl={'https://rockpowerbusiness.org/wp-content/uploads/2018/12/France.jpg'}
                                imageName3={"France"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />
                            <ImageButtonDes
                                imageUrl={'https://www.umultirank.org/export/sites/default/.galleries/generic-images/Others/Winter-Calendar/istanbul.jpg_2017659702.jpg'}
                                imageName3={"Turkey"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', margin: 20, justifyContent: "space-between" }}>

                            <ImageButtonDes
                                imageUrl={'https://blog.gezinomi.com/wp-content/uploads/alaska1-730x411.jpg'}
                                imageName3={"Alaska"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />
                            <ImageButtonDes
                                imageUrl={'https://i0.wp.com/www.mappingmegan.com/wp-content/uploads/2018/10/Peles-Palace-Romania.jpg?resize=1200%2C791&ssl=1'}
                                imageName3={"Romania"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', margin: 20, justifyContent: "space-between" }}>

                            <ImageButtonDes
                                imageUrl={'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg'}
                                imageName3={"Spain"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />
                            <ImageButtonDes
                                imageUrl={'https://www.waredock.com/wp-content/uploads/2019/10/estonia_logistics.jpg'}
                                imageName3={"Estonia"}
                                imageName4={"starting budget"}
                                imageName5={" $2000/person"}
                                resim={styles.resim4}
                            />
                        </View>
                    </View>
                </ScrollView>


            </View>




        )
    }
}
const styles = StyleSheet.create({


    scroll2: {
        width: width,
        maxHeight: height * 0.50,
        borderRadius: 20,
        marginTop: -80,
    },

    child: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    resim4: {
        width: 150,
        height: 130,
        borderRadius: 10,
        zIndex: 0



    }

});

export default Destinations;