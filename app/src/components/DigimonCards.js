import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchDigimon } from "../store/actions/digimonActions";
import Digimon from "./Digimon";

const DigimonCards = props => {
    useEffect(() => {
        props.fetchDigimon();
    }, []);

    return (
        <div>
            <h1 className="digimonTitle">DIGIMON</h1>
            <div className="digimonCardsContainer">
                {props.state.map(val => {
                    return <Digimon name={val.name} img={val.img} level={val.level} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("State from props", state.digimonReducer)
    return {
        state: state.digimonReducer
    }
}

export default connect(mapStateToProps, { fetchDigimon })(DigimonCards);