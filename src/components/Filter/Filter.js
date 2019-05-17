import React from 'react';
import './Filter.css';
import PropertySelector from '../PropertySelector/PropertySelector';
import PropertyInputClass from '../../models/PropertyInputClass';
import Criterion from '../../models/Criterion';
import PropertyInput from '../PropertyInput/PropertyInput';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropertyInputChange = handlePropertyInputChange.bind(this);
    this.handlePropertyChange = handlePropertyChange.bind(this);
  }

  handlePropertyInputChange(selectedPropertyInput) {
    const myKey = this.props.key;
    const currentProperty = {...this.props.criterion.property};
    const updatedFilter = new Criterion(currentProperty, selectedPropertyInput);

    this.props.onFilterChange(updatedFilter, myKey);
  }

  handlePropertyChange(selectedProperty) {
    const myKey = this.props.key;
    const updatedType = selectedProperty.type;
    const updatedPropertyInput = new PropertyInputClass('', updatedType);
    const updatedFilter = new Criterion(selectedProperty, updatedPropertyInput);

    this.props.onFilterChange(updatedFilter, myKey);
  }

  render() {
    return(
      <div>
        <div>
          <PropertySelector property={this.props.criterion.property}
            options={this.props.propertyOptions}
            onPropertyChange={this.handlePropertyChange} />
        </div>
        <div>
          <PropertyInput input={this.props.criterion.input}
            onPropertyInputChange={handlePropertyInputChange} />
        </div>
      </div>
    );
  }
}

export default Filter;