import * as React from 'react';
import CityWeatherSearch from '../CityWeatherSearch';
import './App.css';
import { Layout, Row, Col } from 'antd';
import CityList from '../CityList';
const { Header, Content } = Layout;
import { connect } from 'react-redux';
import { loadCityListFromLocalStorage, loadUserCity } from '../../redux/actions/actions';


interface IApp {
  loadCityListFromLocalStorage: Function,
  loadUserCity: Function
}

const App = ({loadCityListFromLocalStorage, loadUserCity}: IApp) => {
  React.useEffect(() => {
    loadCityListFromLocalStorage()
    window.navigator.geolocation.getCurrentPosition((position) => {
      loadUserCity({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    })
  }, [])

  return (
    <>
      <Layout>
        <Header className="header">
          <Row>
            <Col span={10} offset={7}>
              <h2>Enter city name to get info about the weather in this area</h2>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Col span={10} offset={7}>
              <CityWeatherSearch />
              <CityList />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCityListFromLocalStorage: () => dispatch(loadCityListFromLocalStorage()),
    loadUserCity: (userCoords) => dispatch(loadUserCity(userCoords))
  }
}

export default connect(null, mapDispatchToProps)(App);