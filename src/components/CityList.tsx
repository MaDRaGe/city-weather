import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

const CityList = (props) => {
  React.useEffect(() => {

  }, [])
  console.log("City List", props);
  const cardListView = props.cityList.map((city) => {
    return <Card>
      <h2>{city.name}</h2>
      <p>{city.clouds}</p>
      <p>{city.temp.current}</p>
      <p>{city.humidity}</p>
      <p>{city.pressure}</p>
    </Card>
  })
  return (
    <>
      {cardListView}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
     cityList: state.city.cityList
  }
}

export default connect(mapStateToProps)(CityList);