import React, { Component } from 'react';
import {WeatherStyled} from './index.js';

class Weather extends Component
{
    constructor() {
        super()
        this.state = {
            loading1: false,
            tiempo: '',
        }
    }

    componentDidMount() {
        this.setState({loading1: true})
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=5f11195bb15930c99e51a9aa1b81fad3")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading1: false,
                    tiempo: data.weather[0].description
                })
            })
        }
    
    render()
    {
      const textTiempo = this.state.loading1 ? "loading..." : this.state.tiempo
      return( <WeatherStyled> Today: {textTiempo} </WeatherStyled> )
    }
}
export default Weather