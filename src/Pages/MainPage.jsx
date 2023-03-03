import React, {Component} from 'react';
import Header from "../Components/Layout/Header.jsx";
import '../App.css'
import MainDescription from "../Components/Layout/MainDescription.jsx";
import Companies from "../Components/Layout/Companies.jsx";
class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainDescription/>
                <Companies/>
            </div>
        );
    }
}

export default MainPage;