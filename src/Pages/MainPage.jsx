import React, {Component} from 'react';
import Header from "../Components/Layout/Header.jsx";
import '../App.css'
import MainDescription from "../Components/Layout/MainDescription.jsx";
import Companies from "../Components/Layout/Companies.jsx";
import Stats from "../Components/Layout/Stats.jsx";
import Graphics from "../Components/Layout/Graphics.jsx";
import Abilities from "../Components/Layout/Abilities.jsx";
import AbilitiesMain from "../Components/Layout/AbilitiesMain.jsx";
import Subscription from "../Components/Layout/Subscription.jsx";
import CallBack from "../Components/Layout/CallBack.jsx";
import Footer from "../Components/Layout/Footer.jsx";
class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainDescription/>
                <Companies/>
                <Stats/>
                <Graphics/>
                <Abilities/>
                <AbilitiesMain/>
                <Subscription/>
                <CallBack/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;