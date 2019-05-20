import React from 'react';
import './NewFilter.css';
import Filter from '../Filter/Filter';
import Button from '@material-ui/core/Button';

class NewFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewFilterChange = this.handleNewFilterChange.bind(this);
    this.handleNewFilterAdd = this.handleNewFilterAdd.bind(this);
  }

  handleNewFilterChange(updatedFilter) {
    this.props.onNewFilterChange(updatedFilter);
  }

  handleNewFilterAdd(newFilerAdded) {
    this.props.onNewFilterAdded(newFilerAdded);
  }

  render() {
    const filter = this.props.filter;
    const propertyOptions = this.props.propertyOptions;
    return(
      <div className="param-line-new">
        <div>
          <Filter criterion={filter} propertyOptions={propertyOptions} 
            onFilterChange={this.handleNewFilterChange} />
        </div>
        <Button color="primary"
          onClick={this.handleNewFilterAdd}>Agregar</Button>
      </div>
    );
  }
}

export default NewFilter;