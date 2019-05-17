import React from 'react';
import './SearchFilters.css';

class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterItemChange(updateFilter, theKey) {
    const updatedList = this.props.filters.map((filter, index) => {
      return index === theKey ? updateFilter : filter;
    });

    this.props.onFiltersListChange(updatedList);
  }

  handleNewFilterAdd(newFilter) {
    const updatedList = [...this.props.filters, newFilter];
    this.props.onFiltersListChange(updatedList);
  }
}

export default SearchFilters;