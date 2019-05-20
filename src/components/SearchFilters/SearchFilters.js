import React from 'react';
import './SearchFilters.css';
import Criterion from '../../models/Criterion';
import Property from '../../models/Property';
import PropertyInputClass from '../../models/PropertyInputClass';
import FiltersList from '../FiltersList/FiltersList';
import NewFilter from '../NewFilter/NewFilter';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterItemChange = this.handleFilterItemChange.bind(this);
    this.handleNewFilterAdd = this.handleNewFilterAdd.bind(this);
    this.handleNewFilterChange = this.handleNewFilterChange.bind(this);
    const newFilterProperty = new Property('','','text');
    const newInputProperty = new PropertyInputClass('','text');
    this.state = {
      newFilter: new Criterion(newFilterProperty, newInputProperty)
    }
  }

  handleFilterItemChange(updateFilter, theIndex) {
    const updatedList = this.props.filters.map((filter, index) => {
      return index == theIndex ? updateFilter : filter;
    });

    this.props.onFiltersListChange(updatedList);
  }

  handleNewFilterAdd(newFilter) {
    const updatedList = [...this.props.filters, this.state.newFilter];
    const newFilterProperty = new Property('','','text');
    const newInputProperty = new PropertyInputClass('','text');
    this.setState({
      newFilter: new Criterion(newFilterProperty, newInputProperty)
    });

    this.props.onFiltersListChange(updatedList);
  }

  handleNewFilterChange(updatedFilter) {
    this.setState({
      newFilter: updatedFilter
    })
  }

  render() { 
    return(
      <Card className="card-filters">
        <FiltersList filters={this.props.filters}
          propertyOptions={this.props.propertyOptions}
          onFilterItemChange={this.handleFilterItemChange} />
        <Divider />
        <NewFilter filter={this.state.newFilter}
          propertyOptions={this.props.propertyOptions}
          onNewFilterChange={this.handleNewFilterChange} 
          onNewFilterAdded={this.handleNewFilterAdd}/>
      </Card>
    );
  }
}

export default SearchFilters;