import * as React from 'react';
import { connect } from 'react-redux';
import { fetchWeekForecastByCityName } from '../redux/actions/actions';
import { Input, Alert } from 'antd';
const { Search } = Input;

interface ICityWeatherSearch {
  isFetchSuccess: boolean,
  fetchWeekForecast: Function
}

const CityWeatherSearch = ({ isFetchSuccess, fetchWeekForecast }: ICityWeatherSearch) => {
  const [inputValue, setInputValue] = React.useState('');
  
  let statusView;
  if (!isFetchSuccess) {
    statusView = <Alert type="error" message="Error: city has not been found, please check if city name is right"/>
  } else {
    statusView = null;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    fetchWeekForecast(inputValue);
  }

  const onSearch = () => {
    fetchWeekForecast(inputValue);
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
    fetchWeekForecast: (cityName) => dispatch(fetchWeekForecastByCityName(cityName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityWeatherSearch);