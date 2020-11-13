import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCityWeather } from '../redux/actions/actions';
import { Input, Alert } from 'antd';

export interface ICompanySearchProps {

}


const CityWeatherSearch = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  window.navigator.geolocation.getCurrentPosition((position) => {});
  
  let statusView;
  if (!props.isFetchSuccess) {
    statusView = <Alert message="Error: city has not been found, please check if city name is right"/>
  } else {
    statusView = null;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.fetchCityWeather(inputValue);
    setInputValue('')
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
          <Input onChange={(event) => {
            setInputValue(event.target.value);
          }} placeholder="Weather"/>
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
    fetchCityWeather: (cityName) => dispatch(fetchCityWeather(cityName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityWeatherSearch);