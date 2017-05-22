import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData){
        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);
    
        return(
            <tr key = { cityData.city.id }>
                <td> { cityData.city.name } </td>
                <td> <Chart data={temps} color="blue" units="°C"/> </td>
                <td> <Chart data={pressures} color="red" units="hPa"/> </td>
                <td> <Chart data={humidities} color="yellow" units="%"/> </td>
            </tr>
        )
    }

    render() {
        return (
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th width="10%">City</th>
                        <th width="20%">Temperatures (°C)</th>
                        <th width="20%">Pressure (hPa)</th>
                        <th width="20%">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);