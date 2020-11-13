import * as React from 'react';
import { connect } from 'react-redux';
import City from './City';

interface ICityList {
  cityList: any[]
}

const CityList = ({cityList}: ICityList) => {
  React.useEffect(() => {

  }, [])

  if (cityList.length > 0) {
    const cardListView = cityList.map((city) => {
      return <City
        name={city.name}
        days={city.days}
      />
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

export default connect(mapStateToProps)(CityList);