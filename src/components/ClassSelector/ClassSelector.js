import React from 'react';
import './ClassSelector.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class ClassSelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleClassChange = this.handleClassChange.bind(this);
  }

  handleClassChange(e) {
    this.props.onClassChange(e.target.value);
  }

  render() {
    const classOptions = this.props.options.map((myClass, index) =>{
      if(myClass === ""){
        return (
          <MenuItem key={index} value="">
            <em>Ninguna</em>
          </MenuItem>
        );
      }
      return(
        <MenuItem key={index} value={myClass}>
          {myClass.visualName}
        </MenuItem>
      );
    });

    return(
        <Select value={this.props.selectValue} 
          onChange={this.handleClassChange}
          autoWidth={false}
          >
          {classOptions}
        </Select>
    );
  }
}

export default ClassSelector;