import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCityWeather } from '../redux/actions/actions';
import { Input } from 'antd';

export interface ICompanySearchProps {

}


const CityWeatherSearch = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  window.navigator.geolocation.getCurrentPosition((position) => {});
  return (
    <div>
      <form onSubmit={(event) => {
          event.preventDefault();
          props.fetchCityWeather(inputValue);
          }}>
          <Input onChange={(event) => {
            setInputValue(event.target.value);
          }} placeholder="Weather"/>
      </form>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCityWeather: (cityName) => dispatch(fetchCityWeather(cityName)),
  }
}

export default connect(null, mapDispatchToProps)(CityWeatherSearch);