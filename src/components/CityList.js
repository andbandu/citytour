import React, { Component } from 'react'
import SingleCity from './singlecity/SingleCity'
import {tourData} from '../tourData'

export default class CityList extends Component {
    state = {
        tours : tourData,
    }

    removeTour = (id) =>{
        const {tours} = this.state;
        const sortedTours = tours.filter((value)=> value.id !== id);
        this.setState({
            tours:sortedTours 
        })
    }

    render() {
        const {tours} = this.state;
        return (
            <div>
                {tours.map((value) =>{
                    return (<SingleCity key = {value.id} removeTour = {this.removeTour} singleTour = {value}></SingleCity>)
                })}
            </div>
        )
    }
}
