import React, { Component } from 'react'
import JSON from "../../data.json";
import HomeCompnent from "./HomeComponent"

export default class HomesCompnent extends Component {

    state = {
        Data: JSON,
    };

    render() {
        return (
            <div>

            <h1>
                {this.state.Data.map(data => {
                    return <HomeCompnent key= {data.id} data= {data}/>
                })}
            </h1>
                
            </div>
        )
    }
}