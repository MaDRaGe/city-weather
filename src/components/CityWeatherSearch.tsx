import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCityWeather, fetchWeekWeather } from '../redux/actions/actions';
import { Input, Alert } from 'antd';

const { Search } = Input;

export interface ICompanySearchProps {

}


const CityWeatherSearch = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  window.navigator.geolocation.getCurrentPosition((position) => {});
  
  let statusView;
  if (!props.isFetchSuccess) {
    statusView = <Alert type="error" message="Error: city has not been found, please check if city name is right"/>
  } else {
    statusView = null;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.fetchWeekWeather(inputValue);
  }

  const onSearch = () => {
    props.fetchWeekWeather(inputValue);
  }
  
  return (
    <div>
      
      <form onSubmit={onSubmit}>
        <Search 
          onSubmit={onSearch}
          onSearch={onSearch}
          onChange={
            (event) => {
              setInputValue(event.target.value);
            }
          }
          value={inputValue}
          placeholder="City..."
          enterButton="Search"
        />
      </form> 
      {statusView}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isFetchSuccess: state.city.isFetchSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeekWeather: (cityName) => dispatch(fetchWeekWeather(cityName)),
    fetchCityWeather: (cityName) => dispatch(fetchCityWeather(cityName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityWeatherSearch);