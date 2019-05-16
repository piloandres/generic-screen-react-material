import React from 'react';
import './PropertySelector.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class PropertySelector extends React.Component {

  constructor(props) {
    //onPropertyChange, options, selectValue
    super(props);
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
  }

  handlePropertyChange(e) {
    this.props.onPropertyChange(e.target.value);
  }

  render() {
    const propertyOptions = this.props.options.map((myProperty, index) => {
      if(myProperty === ""){
        return (
          <MenuItem key={index} value="">
            <em>Ninguna</em>
          </MenuItem>
        );
      }
      return(
        <MenuItem key={index} value={myProperty}>
          {myProperty.visualName}
        </MenuItem>
      );
    });

    return (
      <Select value={this.props.selectValue} 
        onChange={this.handlePropertyChange}
        autoWidth={false}
        >
        {propertyOptions}
      </Select>
    );
  }
}