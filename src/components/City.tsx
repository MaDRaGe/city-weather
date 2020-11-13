import * as React from 'react';
import { Card, Button, Table } from 'antd';
import { connect } from 'react-redux';
import { deleteCity } from '../redux/actions/actions';

interface ICity {
  name: string,
  days: any[],
  deleteCity: Function
}

const City = ({name, days, deleteCity}: ICity) => {
  const columns = [];
  for (let column in days[0]) {
    columns.push({
      title: column,
      dataIndex: column,
      key: column
    })
  }
  return (
    <Card>
      <h2>{name}</h2>
      <Table columns={columns} dataSource={days} pagination={false}></Table>
      <Button danger onClick={() => { deleteCity(name) }}>Delete</Button>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (cityName) => dispatch(deleteCity(cityName))
  }
}

export default connect(null, mapDispatchToProps)(City);