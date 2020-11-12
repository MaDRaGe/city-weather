import * as React from 'react';
import CityWeatherSearch from '../CityWeatherSearch';
import './App.css';
import { Layout, Row, Col } from 'antd';
import CityList from '../CityList';
const { Header, Footer, Content } = Layout;

const App = () => {
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

export default App;