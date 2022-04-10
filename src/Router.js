import React from 'react';
import { Dimensions, TouchableOpacity,View } from 'react-native';
import { Scene, Router, Stack, Actions  } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LoginSignUp from './components/LoginSignUp';
import ForgetPassword from './components/ForgetPassword';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-elements/dist/helpers';
import HomePage from './components/HomePage';
import Destinations from './components/Destinations';
import Trip from './components/Trip';
import Favourite from './components/Favourite';
import Profile from './components/Profile';
import ItalyPage from './components/ItalyPage';
import SortBy from './components/SortBy';
import DrawerMenu from './components/DrawerMenu';

const { width, height } = Dimensions.get("window")
const forgetPasswordNavBar = () => {
    return (

        <View style={{ width: width, height: height * 0.08, justifyContent: "center", alignItems: "flex-start" , }}>
            <TouchableOpacity onPress={() =>
                Actions.pop()}>
                <Icon
                    name='arrow-left'
                    type='ion-icon'
                    color='#000'
                    size={30}

                />

            </TouchableOpacity>

        </View>

    );
};
const RouterComponent = () => {
    return (

        <Router style={{ marginTop: 0 }}>
            <Stack key="root">
                <Scene key="kimlik" hideNavBar={true}>
                    <Scene key="loginScreen" component={LoginForm} hideNavBar={true} />
                    <Scene key="register" component={LoginSignUp} hideNavBar={true} />
                    <Scene key="forgetpassword"  titleStyle={{color:"transparent"}}  component={ForgetPassword} leftButton={forgetPasswordNavBar} navTransparent hideNavBar={false} />
                    <Scene key="homePage" component={HomePage} hideNavBar={true} />
                    <Scene key ="destinations" component={Destinations} hideNavBar={true}/>
                    <Scene key = "italy" component ={ItalyPage} hideNavBar ={true}/>
                    <Scene key = "trip" component={Trip} hideNavBar={true}/>
                    <Scene key = "fav" component={Favourite} hideNavbar={true}/>
                    <Scene key = "profil" component ={Profile} hideNavbar={true}/>
                    <Scene key = "sortby" component = {SortBy} hideNavBar ={true}/>
                    <Scene key = "menu" component ={DrawerMenu} hideNavBar ={true} />


                </Scene>

            </Stack>

        </Router>

    );
};

export default RouterComponent;