import React from 'react';
import './FiltersList.css';
import Filter from '../../components/Filter/Filter';

class FiltersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(updatedFilter, theIndex) {
    this.props.onFilterItemChange(updatedFilter, theIndex);
  }

  render() {
    const filters = this.props.filters.map((filter, index) => {
      return (
        <div>
          <Filter key={index} 
            index={index} criterion={filter}
            propertyOptions={this.props.propertyOptions}
            onFilterChange={this.handleFilterChange} />
        </div>
      );
    });
    return(
      <div>
        {filters}
      </div>
    );
  }

}

export default FiltersList;