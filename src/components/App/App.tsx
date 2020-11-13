import * as React from 'react';
import CityWeatherSearch from '../CityWeatherSearch';
import './App.css';
import { Layout, Row, Col } from 'antd';
import CityList from '../CityList';
const { Header, Content } = Layout;
import { connect } from 'react-redux';
import { loadCityListFromLocalStorage, loadUserCity } from '../../redux/actions/actions';


const App = (props) => {
  React.useEffect(() => {
    props.loadCityListFromLocalStorage()
    window.navigator.geolocation.getCurrentPosition((position) => {
      props.loadUserCity({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    })
  }, [])

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Row>
            <Col span={6} offset={8}>
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