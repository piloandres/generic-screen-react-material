import React from 'react';
import './FiltersList.css';
import Filter from '../../components/Filter/Filter';

class FiltersList extends React.Component {
  constructor() {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(updatedFilter, theKey) {
    this.props.onFilterItemChange(updatedFilter, theKey);
  }

  render() {
    const filters = this.props.filters.map((filter, index) => {
      return (
        <Filter key={index} criterion={filter}
          propertyOptions={this.props.propertyOptions}
          onFilterChange={this.handleFilterChange} />
      );
    })
    return(
      {filters}
    );
  }

}

export default FiltersList;