import React from "react";
import { connect } from "react-redux";

const Digimon = props => {
    console.log("Digimon Props", props)
    return (
        <div className="digimonCard">
            {props.name && <h1>{props.name}</h1>}
            {props.img && <img src={props.img} />}
            {props.level && <h2>{props.level}</h2>}
        </div>
    )
}

export default connect(null, {})(Digimon)