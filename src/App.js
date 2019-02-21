
import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
const APP_ID = "fbf712a5a83d7305c3cda4ca8fe7ef29";
  class App extends React.Component {
    state={
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      error:undefined,
    }
   
    getWeather = async(e) => {
      
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_ID}&units=metric`);
      const response = await api_call.json();
      console.log(response);
      this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      error: undefined,  
      });
    }
    render() {
    return (
     <div> 
      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather
        temperature= {this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        error={this.state.error}
        />
     </div>
    ) 
  }
}
export default App;