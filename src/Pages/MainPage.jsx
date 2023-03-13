import React, {Component} from 'react';
import Header from "../Components/Layout/Header.jsx";
import '../App.css'
import MainDescription from "../Components/Layout/MainDescription.jsx";
import Companies from "../Components/Layout/Companies.jsx";
import Stats from "../Components/Layout/Stats.jsx";
import Graphics from "../Components/Layout/Graphics.jsx";
import Abilities from "../Components/Layout/Abilities.jsx";
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
            </div>
        );
    }
}

export default MainPage;