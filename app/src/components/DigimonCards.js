import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchDigimon } from "../store/actions/digimonActions";
import { rookieUrl, championUrl, ultimateUrl, megaUrl } from "../store/actions/urlActions";
import Digimon from "./Digimon";

const DigimonCards = props => {
    useEffect(() => {
        props.fetchDigimon(props.urlState);
    }, [props.urlState]);

    return (
        <div>
            <h1 className="digimonTitle">DIGIMON</h1>
            <div className="buttonContainerDiv">
                <button className="button1" onClick={() => props.rookieUrl()}>ROOKIE</button>
                <button className="button2" onClick={() => props.championUrl()}>CHAMPION</button>
                <button className="button3" onClick={() => props.ultimateUrl()}>ULTIMATE</button>
                <button className="button4" onClick={() => props.megaUrl()}>MEGA</button>
            </div>
            <div className="digimonCardsContainer">
                {props.state.map(val => {
                    return <Digimon name={val.name} img={val.img} level={val.level} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("State from props", state)
    return {
        state: state.digimonReducer,
        urlState: state.urlReducer
    }
}

export default connect(mapStateToProps, { fetchDigimon, rookieUrl, championUrl, ultimateUrl, megaUrl })(DigimonCards);