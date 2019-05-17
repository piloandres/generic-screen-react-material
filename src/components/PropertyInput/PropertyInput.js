import React from 'react';
import './PropertyInput.css';
import TextField from '@material-ui/core/TextField';
import PropertyInputClass from '../../models/PropertyInputClass';

class PropertyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropertyValueChange = 
      this.handlePropertyValueChange.bind(this);
  }

  handlePropertyValueChange(e) {
    const updatedInputValue = e.target.value;
    const inputType = this.props.input.type;
    const updatedPropertyInput = new PropertyInputClass(updatedInputValue, inputType);
    this.props.onPropertyInputChange(updatedPropertyInput);
  }

  //TODO: type checkbox and select
  render() {
    return(
      <TextField label="valor" value={this.props.input.value}
        onChange={this.handlePropertyValueChange}
        type={this.props.input.type} />
    );
  }
}

export default PropertyInput;