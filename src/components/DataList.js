import React from 'react';
import DataListElement from './DataListElement';
import data from '../data/data.json';

export default class DataList extends React.Component {
  constructor() {
    super();

    this.state = {
      listItems: data,
      items: [],
      filteredItems: []
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log('render function');
    const { listItems, filteredItems } = this.state;
    return (
      <ul className="col-md-4 list-group">
        {this.renderDataElements(listItems, filteredItems)}
      </ul>
      )
  }

  renderDataElements = (data, filteredData) => {
    const { items } = this.state;

    const result = data.map(element => {
      items.push(element.key);
      return (
        <DataListElement
          key={element.key}
          element={element}
          show={filteredData.includes(element.key) || items.includes(element.key)}
          toggleFn={() => this.toggleListItem}
        />
      )
    });
    this.setState = ({
      items
    });
    return result;
  };

  toggleListItem = (event) => {
    const { items } = this.state;
    const newValue = event.target.value;
    const newItem = items.filter(item => {
      return item === +newValue
    });
    this.setState = ({
      filteredItems: +newItem
    })
  }
}