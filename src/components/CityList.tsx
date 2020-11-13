import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { deleteCity } from '../redux/actions/actions';

const CityList = (props) => {
  React.useEffect(() => {

  }, [])

  if (props.cityList.length > 0) {
    const cardListView = props.cityList.map((city) => {
      return <Card>
        <h2>{city.name}</h2>
        <p>clouds: {city.clouds}</p>
        <p>temp: {city.temp.current}</p>
        <p>humidity: {city.humidity}</p>
        <p>pressure: {city.pressure}</p>
        <Button danger onClick={() => { props.deleteCity(city.name) }}>Delete</Button>
      </Card>
    })
    return (
      <>
        {cardListView}
      </>
    )
  }
  return (
    <h2>Empty city list</h2>
  )
}

const mapStateToProps = (state) => {
  return {
     cityList: state.city.cityList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (cityName) => dispatch(deleteCity(cityName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);