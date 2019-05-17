import React from 'react';
import './NewFilter.css';

class NewFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleNewFilterChange(updatedFilter) {
    this.props.onNewFilterChange(updatedFilter);
  }

  handleNewFilterAdd(newFilerAdded) {
    this.props.onNewFilterAdded(newFilerAdded);
  }
}