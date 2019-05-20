import React from 'react';
import './Filter.css';
import PropertySelector from '../PropertySelector/PropertySelector';
import PropertyInputClass from '../../models/PropertyInputClass';
import Criterion from '../../models/Criterion';
import PropertyInput from '../PropertyInput/PropertyInput';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropertyInputChange = this.handlePropertyInputChange.bind(this);
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
  }

  handlePropertyInputChange(selectedPropertyInput) {
    const myIndex = this.props.index ? this.props.index : "";
    // const currentProperty = {...this.props.criterion.property};
    const updatedFilter = new Criterion(this.props.criterion.property, selectedPropertyInput);

    this.props.onFilterChange(updatedFilter, myIndex);
  }

  handlePropertyChange(selectedProperty) {
    const myIndex = this.props.index ? this.props.index : "";
    const updatedType = selectedProperty.type;
    const updatedPropertyInput = new PropertyInputClass('', updatedType);
    const updatedFilter = new Criterion(selectedProperty, updatedPropertyInput);

    this.props.onFilterChange(updatedFilter, myIndex);
  }

  render() {
    return(
      <div className="param-line">
        <div className="param-line prop-selector">
          <PropertySelector property={this.props.criterion.property}
            options={this.props.propertyOptions}
            onPropertyChange={this.handlePropertyChange} />
        </div>
        <div className="param-line">
          <PropertyInput input={this.props.criterion.input}
            onPropertyInputChange={this.handlePropertyInputChange} />
        </div>
      </div>
    );
  }
}

export default Filter;