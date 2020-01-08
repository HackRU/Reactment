import React, { Component } from "react";
import BabyYodaURI from "./baby-yoda.jpg";
import ThugLifeGlassesURI from "./thug-life-glasses.png";
import "./BabyYoda.css";
import strings from "../strings.json";

export default class BabyYoda extends Component {
    render() {
        return (
            <div className="baby-yoda">
                <div>
                    <h1>Touch This</h1>
                    <div>
                        <img src={BabyYodaURI} alt={strings.babyYodaAlt} />
                        <img src={ThugLifeGlassesURI} alt={strings.thugLifeGlassesAlt} />
                    </div>
                    <h1>You Cannot</h1>
                </div>
            </div>
        );
    }
}
