import React, { Component } from 'react'
import './singlecity.scss'

export default class SingleCity extends Component {
    state = {
        showInfo : false,
    }
    toggle = () => {
        this.setState(
            {showInfo : !this.state.showInfo}
        )
    }
    render() {
        const {city,img,name,info,id} = this.props.singleTour;
        const {removeTour} = this.props;
        return (
            <div className = "city-card">
                <div className="img-container">
                    <img src = {img} alt="city pi" />
                </div>
                <div className = " city-details">
                    <button onClick = {()=>removeTour(id)} className="close">X</button>
                    <h1>{city}</h1>
                    <h2>{name}</h2>
                    <button onClick = {this.toggle} className = "show">{this.state.showInfo?"Hide info":"Show info"}</button>
                    <p>{this.state.showInfo&& info}</p>
                </div>        
            </div>
        )
    }
}
