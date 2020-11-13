import * as React from 'react';
import CityWeatherSearch from '../CityWeatherSearch';
import './App.css';
import { Layout, Row, Col } from 'antd';
import CityList from '../CityList';
const { Header, Footer, Content } = Layout;
import { connect } from 'react-redux';
import { loadCityListFromLocalStorage } from '../../redux/actions/actions';


const App = (props) => {
  console.log(props);
  React.useEffect(() => {
    props.loadCityListFromLocalStorage()
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
    loadCityListFromLocalStorage: () => dispatch(loadCityListFromLocalStorage())
  }
}

export default connect(null, mapDispatchToProps)(App);