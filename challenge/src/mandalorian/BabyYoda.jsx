import React, { Component } from "react";
import BabyYodaURI from "./baby-yoda.jpg";
import ThugLifeGlassesURI from "./thug-life-glasses.png";
import "./BabyYoda.css";
import strings from "../strings.json";

export default class BabyYoda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadState: 0
        };
    }

    render() {
        let inner = document.querySelector('.baby-yoda div');
        let height = '0px';
        if (inner) {
            height = '' + inner.clientHeight + 'px';
        }
        return (
            <div className="baby-yoda" style={{height}}>
              <div className="baby-yoda-content">
                <h1>Touch This</h1>
                <div>
                  <img src={BabyYodaURI} alt={strings.babyYodaAlt} onLoad={this.onImageLoad} onMouseMove={this.onImageHover} />
                  <img src={ThugLifeGlassesURI} alt={strings.thugLifeGlassesAlt} onLoad={this.onImageLoad} onMouseMove={this.onImageHover} />
                </div>
                <h1>You Cannot</h1>
              </div>
            </div>
        );
    }

    onImageLoad = () => {
        this.setState(state => {
            return {loadState: state.loadState + 1};
        }, () => {
            if (this.state.loadState === 2) {
                this.animate();
            }
        });
    };

    animate = () => {

        if (document.querySelector('.baby-yoda') != null  ){
        setTimeout(() => {if (document.querySelector('.baby-yoda h1:first-child') != null) document.querySelector('.baby-yoda h1:first-child').style.opacity = 1}, 250);
        setTimeout(() => {if (document.querySelector('.baby-yoda h1:last-child') != null) document.querySelector('.baby-yoda h1:last-child').style.opacity = 1}, 500);
        document.querySelector('.baby-yoda img:last-child').style.opacity = 1;
        }
    };

    onImageHover = () => {
        if (this.state.loadState === 2) {
            const maxWidth = document.querySelector('.baby-yoda').getBoundingClientRect().width;
            const container = document.querySelector('.baby-yoda > div');
            const containerWidth = container.getBoundingClientRect().width;
            let x = container.style.left ? parseFloat(container.style.left.slice(0, -1)) * maxWidth / 100 : parseFloat(getComputedStyle(container).left.slice(0, -2));

            // const leftMin = 0;
            const leftMax = x - containerWidth;
            const rightMin = x + containerWidth;
            const rightMax = maxWidth - containerWidth;

            if (leftMax < 0) {
                if (rightMax >= rightMin) {
                    x = rightMin + Math.random() * (rightMax - rightMin);
                }
            } else if (rightMax < rightMin) {
                x = Math.random() * leftMax;
            } else {
                x = Math.random() * (maxWidth - containerWidth) <= leftMax ? Math.random() * leftMax : rightMin + Math.random() * (rightMax - rightMin);
            }

            container.style.left = `${x / maxWidth * 100}%`;
            container.style.transform = `translateX(-${container.style.left})`;
        }
    };
}
